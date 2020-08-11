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
        $recipe->updateRecipe($request);
        return response()->json([$recipe], 200);
    }

    //Delete
    public function deleteRecipe($id) {
        $user = Auth::user();
        Recipe::destroy($id);
        return response()->json(['Receita deletada'], 200);
    }
}
