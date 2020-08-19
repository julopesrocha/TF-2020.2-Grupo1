<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;
use App\User;
use App\Challenge;
use Auth;
use App\Http\Requests\RecipeRequest;
use DB;
use App\Http\Resources\Recipes as RecipeResource;

class RecipeController extends Controller
{
    //Create
    public function postRecipe(RecipeRequest $request){
        $user = Auth::user();
        $newRecipe = new Recipe;
        $newRecipe->createRecipe($request);
        $newRecipe->setUser($user->id);
        $searchResult = Challenge::where('title',$request->challenge)->get();
        if (count($searchResult) == 0) {
            return response()->json(['error' => 'Challenge not found'], 404);
        }
        $challenge_id = $searchResult[0]->id;
        $newRecipe->setChallenge($challenge_id);
        return response()->json(['recipe' => new RecipeResource($newRecipe)], 200);
    }

    // Read
    public function getRecipe($id) {
        $recipe = Recipe::findOrFail($id);
        return response()->json(['recipe' => new RecipeResource($recipe)], 200);
    }

    public function listRecipes() {
        $recipeList = Recipe::all();
        $sortedList = $recipeList->sortByDesc('created_at');
        return response()->json(['recipeList' => RecipeResource::collection($sortedList)], 200);
    }

    public function listRecipesOfUser($user_id) {
        $recipeList = Recipe::where('user_id', $user_id)->get();
        $sortedList = $recipeList->sortByDesc('created_at');
        return response()->json(['recipeList' => RecipeResource::collection($sortedList)], 200);
    }

    public function listRecipesOfChallenge($challenge_id) {
        $recipeList = Recipe::where('challenge_id', $challenge_id)->get();
        $sortedList = $recipeList->sortByDesc('created_at');
        return response()->json(['recipeList' => RecipeResource::collection($sortedList)], 200);
    }

    public function getRecipesOfFollowing() {
        $user = Auth::user();
        $FollowingList = $user->follower()->with('recipes')->get();
        $recipeList = [];
        foreach ($FollowingList as $following) {
            $recipesOfuser = $following->recipes;
            foreach($recipesOfuser as $recipe) {
                array_push($recipeList, $recipe);
            }
        }
        $sortedList = collect($recipeList)->sortByDesc('created_at');
        return response()->json(['RecipeList' => RecipeResource::collection($sortedList)], 200);
    }

    //Update
    public function updateRecipe(RecipeRequest $request, $id) {
        $user = Auth::user();
        $recipe = Recipe::findOrFail($id);
        $recipe->updateRecipe($request);
        return response()->json(['recipe' => new RecipeResource($recipe)], 200);
    }

    //Delete
    public function deleteRecipe($id) {
        $user = Auth::user();
        Recipe::findOrFail($id);
        Recipe::destroy($id);
        return response()->json(['Recipe deleted'], 200);
    }

    // Relação com likes
    public function likeRecipe($recipe_id){
        $user = Auth::user();
        $recipes = Recipe::findOrFail($recipe_id);
        $status = DB::table('likes')->where('user_id', $user->id)->where('recipe_id', $recipes->id)->count()>0;
        if ($status){
            $user->likeDown($recipe_id);
            return response()->json(['dislike' => "You no longer like the recipe ". $recipes->title,
                                     'hasLiked' => false], 200);
        } else{
            $user->likeUp($recipe_id);
            return response()->json(['like' => "You liked the recipe ". $recipes->title,
                                     'hasLiked' => true], 200);
        }
    }
}
