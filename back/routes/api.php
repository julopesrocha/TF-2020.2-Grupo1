<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Receita
Route::GET('getRecipe/{recipe_id}', 'RecipeController@getRecipe');
Route::GET('getComment/{comment_id}', 'CommentController@getComment');

// Somente autenticado
Route::POST('register', 'API\PassportController@register');
route::POST('login', 'API\PassportController@login');

Route::group(['middleware' =>'auth:api'], function(){
    
    // Usuário
    Route::POST('getDetails', 'API\PassportController@getDetails');
    Route::GET('logout', 'API\PassportController@logout');

    // Receita
    Route::POST('postRecipe', 'RecipeController@postRecipe');
    Route::PUT('updateRecipe/{recipe_id}', 'RecipeController@updateRecipe');
    Route::DELETE('deleteRecipe/{recipe_id}', 'RecipeController@deleteRecipe');

    // Comentário
    Route::POST('postComment/{recipe_id}', 'CommentController@postComment');
    Route::PUT('updateComment/{comment_id}', 'CommentController@updateComment');
    Route::DELETE('deleteComment/{comment_id}', 'CommentController@deleteComment')->middleware('deleteComment');
});