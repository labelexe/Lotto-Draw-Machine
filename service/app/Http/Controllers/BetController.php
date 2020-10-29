<?php

namespace App\Http\Controllers;

use App\Bet;
use Illuminate\Http\Request;
use App\Http\Resources\Bet as BetResource;
use App\Http\Resources\BetCollection;
use Bugsnag\BugsnagLaravel\LaravelLogger;
use Illuminate\Support\Facades\Log;

class BetController extends Controller
{
    public function index()
    {
        Log::info('test');
        return new BetCollection(Bet::all());
    }

    public function show($id)
    {
        return new BetResource(Bet::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'notes' => 'required|max:255',
        ]);

        $bet = Bet::create($request->all());

        return (new BetResource($bet))
                ->response()
                ->setStatusCode(201);
    }

    public static function getResults($range, $balls) {
        /*              $range               // Array of all numbers from 5 to 49 inclusive
                array_flip(           )          // Swap the keys and values.
        array_rand(                       ,$balls)  // Random subset of 0 to 7 keys.*/
        return ['range' => $range,'balls' => $balls,'result'=> array_rand(array_flip($range),$balls)];
    }


    public function draw() {
        return ["lotto" => BetController::getResults(range(40,49), rand(5,7)), "powerball" => BetController::getResults(range(5,49), range(0,3))];
    }

    public function selection($id, Request $request)
    {
        $request->merge(['correct' => (bool) json_decode($request->get('correct'))]);
        $request->validate([
            'correct' => 'required|boolean'
        ]);

        $bet = Bet::findOrFail($id);

        $bet->selection++;

        $bet->win = ($request->get('correct')
                           ? $bet->win + 1
                           : $bet->win - 1);

        $bet->save();

        return new BetResource($bet);
    }

    public function delete($id)
    {
        $bet = Bet::findOrFail($id);
        $bet->delete();

        return response()->json(null, 204);
    }

    public function resetResults($id)
    {
        $bet = Bet::findOrFail($id);
        $bet->selection = 0;
        $bet->win = 0;
        return new BetResource($bet);
    }
}
