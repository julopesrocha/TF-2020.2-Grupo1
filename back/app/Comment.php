<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\CommentRequest;
use Auth;

class Comment extends Model
{
    // Relação do comentário com o usuário
    public function user(){
        return $this->belongsTo('App\User');
    }

    // Relação do comentário com uma receita
    public function recipe(){
        return $this->hasOne('App\Recipe');
    }

    // Função para criar um comentário
    public function postComment(CommentRequest $request){
        $this->comment = $request->comment;
        $this->save();
    }

    // Função para atualizar um comentário
    public function updateComment(CommentRequest $request){
        if ($request->comment)
            $this->comment = $request->comment;
        $this->save();
    }

    // Função para determinar uma receita ao criar um comentário
    public function setRecipe($recipe_id){
        $recipe = Recipe::findOrFail($recipe_id);
        $this->recipe_id = $recipe_id;
        $this->save();
    }

    // Função para determinar um usuário ao criar um comentário
    public function setUser($user_id) {
        $user = User::findOrFail($user_id);
        $this->user_id = $user_id;
        $this->save();
    }
}
