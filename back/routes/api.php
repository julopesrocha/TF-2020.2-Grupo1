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

/*
--------------------------------------------------------------------------------

                        Rotas sem autenticação

--------------------------------------------------------------------------------
 */

// Usuário
Route::GET('getUserProfile/{user_id}', 'UserController@getUserProfile');

// Receita
Route::GET('getRecipe/{recipe_id}', 'RecipeController@getRecipe');
Route::GET('listRecipes', 'RecipeController@listRecipes');
Route::GET('listRecipesOfUser/{user_id}', 'RecipeController@listRecipesOfUser');
Route::GET('listRecipesOfChallenge/{challenge_id}', 'RecipeController@listRecipesOfChallenge');

// Comentário
Route::GET('getComment/{comment_id}', 'CommentController@getComment');
Route::GET('listComments/{recipe_id}', 'CommentController@listComments');

// Desafio
Route::GET('getChallenge/{challenge_id}', 'ChallengeController@getChallenge');
Route::GET('listChallenges', 'ChallengeController@listChallenges');

// Seguir
Route::GET('getFollowersOfUser/{user_id}','UserController@getFollowersOfUser');
Route::GET('getUserFollowing/{user_id}', 'UserController@getUserFollowing');

// Passport
Route::POST('register', 'API\PassportController@register');
Route::POST('login', 'API\PassportController@login');

/*
--------------------------------------------------------------------------------
                        
                        Rotas com autenticação

--------------------------------------------------------------------------------
 */

Route::group(['middleware' =>'auth:api'], function(){

    // Usuário
    Route::GET('logout', 'API\PassportController@logout');
    Route::GET('getDetails', 'API\PassportController@getDetails');
    Route::PUT('editUserProfile', 'UserController@editUserProfile');
    Route::DELETE('deleteUser/{user_id}', 'UserController@deleteUser')
            ->middleware('userPermissions');

    // Receita
    Route::GET('getRecipesOfFollowing', 'RecipeController@getRecipesOfFollowing');
    Route::POST('postRecipe', 'RecipeController@postRecipe');
    Route::PUT('updateRecipe/{recipe_id}', 'RecipeController@updateRecipe')
            ->middleware('recipePermissions');
    Route::DELETE('deleteRecipe/{recipe_id}', 'RecipeController@deleteRecipe')
            ->middleware('recipePermissions');

    // Comentário
    Route::POST('postComment/{recipe_id}', 'CommentController@postComment');
    Route::PUT('updateComment/{comment_id}', 'CommentController@updateComment')
            ->middleware('commentPermissions');
    Route::DELETE('deleteComment/{comment_id}', 'CommentController@deleteComment')
            ->middleware('commentPermissions');

    // Desafio
    Route::POST('postChallenge', 'ChallengeController@postChallenge')
            ->middleware('adminPermissions');
    Route::PUT('updateChallenge/{challenge_id}', 'ChallengeController@updateChallenge')
            ->middleware('adminPermissions');
    Route::DELETE('deleteChallenge/{challenge_id}', 'ChallengeController@deleteChallenge')
            ->middleware('adminPermissions');

    // Seguir
    Route::GET('getFollowers', 'UserController@getFollowers');
    Route::GET('getFollowing', 'UserController@getFollowing');
    Route::GET('isFollowing/{user_id}', 'UserController@isFollowing');
    Route::POST('followUser/{user_id}', 'UserController@followUser');

    // Curtir
    Route::GET('hasLiked/{recipe_id}', 'RecipeController@hasLiked');
    Route::POST('likeRecipe/{recipe_id}', 'RecipeController@likeRecipe');

});
