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
    /*
    ----------------------------------------------------------------------------

    Funções de Criar, Ler, Atualizar e Deletar Receitas

    ----------------------------------------------------------------------------
    */

    /**
     * Cria uma receita e a atribui ao usuário logado e ao desafio do campo
     * challenge na request
     * 
     * @param RecipeRequest       $request
     * 
     * @return JsonResponse
     */
    public function postRecipe(RecipeRequest $request){
        $user = Auth::user();
        $newRecipe = new Recipe;
        $newRecipe->createRecipe($request);
        $newRecipe->setUser($user->id);
        $searchResult = Challenge::where('title',$request->challenge)->get();
        if (count($searchResult) == 0) {
            return response()->json([
                'error' => 'Challenge not found'
            ], 404);
        }
        $challenge_id = $searchResult[0]->id;
        $newRecipe->setChallenge($challenge_id);
        return response()->json([
            'recipe' => new RecipeResource($newRecipe)
        ], 200);
    }

    /**
     * Retorna a receita correspondente ao $id
     * 
     * @param int       $id
     * 
     * @return JsonResponse
     */
    public function getRecipe($id) {
        $recipe = Recipe::findOrFail($id);
        return response()->json(['recipe' => new RecipeResource($recipe)], 200);
    }

    /**
     * Retorna todas as receitas do BD em ordem de criação.
     * 
     * @return JsonResponse
     */
    public function listRecipes() {
        $recipeList = Recipe::all();
        $sortedList = $recipeList->sortByDesc('created_at');
        return response()->json([
            'recipeList' => RecipeResource::collection($sortedList)
        ], 200);
    }

    /**
     * Retorna as receitas de um usuário em ordem de criação
     * 
     * @param int       $user_id
     * 
     * @return JsonResponse
     */
    public function listRecipesOfUser($user_id) {
        $recipeList = Recipe::where('user_id', $user_id)->get();
        $sortedList = $recipeList->sortByDesc('created_at');
        return response()->json([
            'recipeList' => RecipeResource::collection($sortedList)
        ], 200);
    }

    /**
     * Retorna as receitas de um desafio em ordem de criação
     * 
     * @param int       $challenge_id
     * 
     * @return JsonResponse
     */
    public function listRecipesOfChallenge($challenge_id) {
        $recipeList = Recipe::where('challenge_id', $challenge_id)->get();
        $sortedList = $recipeList->sortByDesc('created_at');
        return response()->json([
            'recipeList' => RecipeResource::collection($sortedList)
        ], 200);
    }

    /**
     * Retorna as receitas dos usuários que o usuário logado segue
     * em ordem de criação
     * 
     * @return JsonResponse
     */
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
        return response()->json([
            'RecipeList' => RecipeResource::collection($sortedList)
        ], 200);
    }

    /**
     * Atualiza os dados de uma receita
     * 
     * @param RecipeRequest     $request
     * @param int               $id
     */
    public function updateRecipe(RecipeRequest $request, $id) {
        $user = Auth::user();
        $recipe = Recipe::findOrFail($id);
        $recipe->updateRecipe($request);
        return response()->json(['recipe' => new RecipeResource($recipe)], 200);
    }

    /**
     * Deleta uma receita do BD
     * 
     * @param int       $id
     * 
     * @return JsonResponse
     */
    public function deleteRecipe($id) {
        $user = Auth::user();
        Recipe::findOrFail($id);
        Recipe::destroy($id);
        return response()->json(['Recipe deleted'], 200);
    }

    /*
    ----------------------------------------------------------------------------

    Funções da relação de curtir receitas

    ----------------------------------------------------------------------------
    */

    /**
     * Faz o usuário logado curtir uma receita
     * 
     * @param int       $recipe_id
     * 
     * @return JsonResponse
     */
    public function likeRecipe($recipe_id){
        $user = Auth::user();
        $recipes = Recipe::findOrFail($recipe_id);
        $status = DB::table('likes')->where('user_id', $user->id)
                                    ->where('recipe_id', $recipes->id)
                                    ->count()>0;
        if ($status){
            $user->likeDown($recipe_id);
            return response()->json([
                'dislike' => "You no longer like the recipe ". $recipes->title,
                'hasLiked' => false], 200
            );
        } else{
            $user->likeUp($recipe_id);
            return response()->json([
                'like' => "You liked the recipe ". $recipes->title,
                'hasLiked' => true], 200
            );
        }
    }

    /**
     * retorna se o usuário logado gostou de uma receita
     * 
     * @param int       $recipe_id
     * 
     * @return JsonResponse
     */
    public function hasLiked($recipe_id) {
        $user = Auth::user();
        Recipe::findOrFail($recipe_id);
        $hasLiked = $user->likeMadeByUser()->get()->contains('id', $recipe_id);
        return response()->json(['hasLiked' => $hasLiked], 200);
    }
}
