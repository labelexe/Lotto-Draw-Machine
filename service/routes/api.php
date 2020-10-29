<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix'     => 'api/v1/',
    'middleware' => 'cors'
], function() {
    Route::get('/bets', 'BetController@index');
    Route::get('/bets/{id}', 'BetController@show');
    Route::post('/bets', 'BetController@store');
    Route::post('/bets/{id}/selection', 'BetController@selection');
    Route::delete('/bets/{id}', 'BetController@delete');
    Route::delete('/bets/{id}/selection', 'BetController@resetResults');
});
