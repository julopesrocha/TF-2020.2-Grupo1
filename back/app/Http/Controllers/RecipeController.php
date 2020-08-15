<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;
use App\User;
use App\Challenge;
use Auth;
use App\Http\Requests\RecipeRequest;

class RecipeController extends Controller
{
    //Create
    public function postRecipe(RecipeRequest $request){
        $user = Auth::user();
        $newRecipe = new Recipe;
        $newRecipe->createRecipe($request);
        $newRecipe->setUser($user->id);
        $challenge_id = Challenge::where('title',$request->challenge)->get()[0]->id;
        $newRecipe->setChallenge($challenge_id);
        return response()->json(['recipe' => $newRecipe], 200);
    }

    // Read
    public function getRecipe($id) {
        $recipe = Recipe::findOrFail($id);
        return response()->json(['recipe' => $recipe], 200);
    }

    //Update
    public function updateRecipe(RecipeRequest $request, $id) {
        $user = Auth::user();
        $recipe = Recipe::findOrFail($id);
        $recipe->updateRecipe($request);
        return response()->json(['recipe' => $recipe], 200);
    }

    //Delete
    public function deleteRecipe($id) {
        $user = Auth::user();
        Recipe::destroy($id);
        return response()->json(['Recipe deleted'], 200);
    }
}
