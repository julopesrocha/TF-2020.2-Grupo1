<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\CommentRequest;
use Auth;

class Comment extends Model
{
    
    protected $fillable = [];

    /**
     * Relação do comentário de um usuário
     * 
     * @return Relations\BelongsTo
     */
    public function user(){
        return $this->belongsTo('App\User');
    }

    /**
     * Relação do comentário de uma receita  
     * 
     * @return Relations\HasOne
     */
    public function recipe(){
        return $this->hasOne('App\Recipe');
    }

    /**
     * Função para criar um novo comentário no BD
     * 
     * @param CommentRequest    $request
     */
    public function postComment(CommentRequest $request){
        $this->comment = $request->comment;
        $this->save();
    }

    /**
     * Atualiza o atributo comentário no BD
     * 
     * @param CommentRequest        $request
     */
    public function updateComment(CommentRequest $request){
        if ($request->comment)
            $this->comment = $request->comment;
        $this->save();
    }

    /**
     * Função para definir em qual receita será postado um comentário
     * 
     * @param int       $recipe_id
     * 
     */
    public function setRecipe($recipe_id){
        $recipe = Recipe::findOrFail($recipe_id);
        $this->recipe_id = $recipe_id;
        $this->save();
    }

    /**
     * Função para determinar um usuário ao criar um comentário
     * 
     * @param int       $user_id
     * 
     */
    public function setUser($user_id) {
        $user = User::findOrFail($user_id);
        $this->user_id = $user_id;
        $this->save();
    }
}
