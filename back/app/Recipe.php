<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Requests\RecipeRequest;

class Recipe extends Model
{
    // Create
    public function createRecipe(RecipeRequest $request) {
        $this->title = $request->title;
        $this->ingredients = $request->ingredients;
        $this->preparation = $request->preparation;
        $this->subtitle = $request->subtitle;
        $this->save();
    }

    // Update
    public function updateRecipe(RecipeRequest $request) {
        if ($request->title) {
            $this->title = $request->title;
        }
        if ($request->ingredients) {
            $this->ingredients = $request->ingredients;
        }
        if ($request->preparation) {
            $this->preparation = $request->preparation;
        }
        if ($request->subtitle) {
            $this->subtitle = $request->subtitle;
        }
        $this->save();
    }

    // Relação com usuário (que publicou a receita)
    public function setUser($user_id) {
        $user = User::findOrFail($user_id);
        $this->user_id = $user_id;
        $this->save();
    }

    public function user() {
        return $this->belongsTo('App/User');
    }

    // Relação da receita com o comentário
    public function commentsInRecipe(){
        return $this->hasMany('App\Comment');
    }
    
    // Relação com desafio que pertence
    public function setChallenge($challenge_id) {
        $challenge = Challenge::findOrFail($challenge_id);
        $this->challenge_id = $challenge_id;
        $this->save();
    }

    public function challenge() {
        return $this->belongsTo('App/Challenge');
    }

    // Relação com o usuário que curte uma receita
    public function likes(){
        return $this->belongsToMany('App\User', 'likes', 'recipe_id', 'user_id');
    }


}
