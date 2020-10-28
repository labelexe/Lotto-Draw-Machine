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

Route::get('/clients', 'ClientController@index');
Route::get('/clients/{id}', 'ClientController@show');
Route::post('/clients', 'ClientController@store');
Route::post('/clients/{id}/results', 'ClientController@answer');
Route::delete('/clients/{id}', 'ClientController@delete');
Route::delete('/clients/{id}/results', 'ClientController@resetResults');
