<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;
use App\User;
use Auth;
use App\Http\Requests\RecipeRequest;

class RecipeController extends Controller
{
    //Create
    public function postRecipe(RecipeRequest $request) {
        if (($user = Auth::user()) == null) {
            return response()->json(['error'=>'Unauthorized'], 401);
        }
        $user = Auth::user();
        $newRecipe = new Recipe;
        $newRecipe->createRecipe($request);
        $newRecipe->setUser($user->id);
        return response()->json([$newRecipe], 200);
    }

    //read
    public function getRecipe($id) {
        $recipe = Recipe::findOrFail($id);
        return response()->json([$recipe], 200);
    }

    //Update
    public function updateRecipe(RecipeRequest $request, $id) {
        $user = Auth::user();
        $recipe = Recipe::findOrFail($id);

        if (($recipe->user_id == $user->id) || ($user->privileged)) {
            $recipe->updateRecipe($request);
            return response()->json([$recipe], 200);
        }
        else {
            return response()->json(['error'=>'Unauthorized'], 401);
        }
    }

    //Delete
    public function deleteRecipe($id) {
        $user = Auth::user();
        $recipe = Recipe::findOrFail($id);  

        if (($recipe->user_id == $user->id) || ($user->privileged)) {
            Recipe::destroy($id);
            return response()->json(['Receita deletada'], 200);
        }
        else {
            return response()->json(['error'=>'Unauthorized'], 401);
        }
    }
}
