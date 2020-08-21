<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Requests\RecipeRequest;

class Recipe extends Model
{

    protected $fillable = [];

    /** 
     * Preenche as colunas de uma nova receita no BD
     *  
     * @param RecipeRequest        $request
     */ 
    public function createRecipe(RecipeRequest $request) {
        $this->title = $request->title;
        $this->ingredients = $request->ingredients;
        $this->preparation = $request->preparation;
        $this->subtitle = $request->subtitle;
        $this->photo = $request->photo;
        $this->save();

    }

    /** 
     * Atualiza as colunas de uma receita no BD
     * 
     * @param RecipeRequest        $request
    */
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

        if ($request->photo) {
            $this->photo = $request->photo;
        }

        $this->save();
    }

    /** 
     * Cria relação com usuário (que publicou a receita)
     *  
     * @param int      $user_id
     */
    public function setUser($user_id) {
        $user = User::findOrFail($user_id);
        $this->user_id = $user_id;
        $this->save();
    }

    /**
     * Retorna relações com usuários
     * 
     * @return Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo('App\User');
    }

    /**
     * Retorna relação da receita com o comentários
     * 
     * @return Relations\HasMany
     */
    public function commentsInRecipe(){
        return $this->hasMany('App\Comment');
    }
    
    /**
     * Cria relação com desafio que pertence
     * 
     * @param int       $id
     */ 
    public function setChallenge($challenge_id) {
        $challenge = Challenge::findOrFail($challenge_id);
        $this->challenge_id = $challenge_id;
        $this->save();
    }

    /**
     * Retorna relação com desafio que pertence
     * 
     * @return Relations\BelongsTo
     */
    public function challenge() {
        return $this->belongsTo('App\Challenge');
    }

    /**
     * Retorna relação de curtir
     * 
     * @return Relations\BelongsToMany
     */ 
    public function likes(){
        return $this->belongsToMany('App\User', 'likes', 'recipe_id', 'user_id');
    }


}
