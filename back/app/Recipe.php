<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Requests\RecipeRequest;

class Recipe extends Model
{
    // Create
    public function createRecipe(RecipeRequest $request) {
        $this->name = $request->name;
        $this->ingredients = $request->ingredients;
        $this->preparation = $request->preparation;
        $this->caption = $request->caption;
        $this->save();
    }

    // Update
    public function updateRecipe(RecipeRequest $request) {
        if ($request->name) {
            $this->name = $request->name;
        }
        if ($request->ingredients) {
            $this->ingredients = $request->ingredients;
        }
        if ($request->preparation) {
            $this->preparation = $request->preparation;
        }
        if ($request->caption) {
            $this->caption = $request->caption;
        }
        $this->save();
    }

    public function setUser($user_id) {
        $user = User::findOrFail($user_id);
        $this->user_id = $user_id;
        $this->save();
    }

    // Relação com usuário (que publicou a receita)
    public function users() {
        return $this->belongsTo('App/User');
    }

    // Relação da receita com o comentário
    public function commentsInRecipe(){
        return $this->hasMany('App\Comment');
    }
}
