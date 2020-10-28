<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;
use App\Http\Resources\Client as ClientResource;
use App\Http\Resources\ClientCollection;

class ClientController extends Controller
{
    public function index()
    {
        return new ClientCollection(Client::all());
    }

    public function show($id)
    {
        return new ClientResource(Client::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $client = Client::create($request->all());

        return (new ClientResource($client))
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
        return ["lotto" => ClientController::getResults(range(40,49), rand(5,7)), "powerball" => ClientController::getResults(range(5,49), range(0,3))];
    }

    public function answer($id, Request $request)
    {
        $request->merge(['correct' => (bool) json_decode($request->get('correct'))]);
        $request->validate([
            'correct' => 'required|boolean'
        ]);

        $client = Client::findOrFail($id);

        $client->results++;

        $client->win = ($request->get('correct')
                           ? $client->win + 1
                           : $client->win - 1);

        $client->save();

        return new ClientResource($client);
    }

    public function delete($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();

        return response()->json(null, 204);
    }

    public function resetResults($id)
    {
        $client = Client::findOrFail($id);
        $client->results = 0;
        $client->win = 0;

        return new ClientResource($client);
    }
}
