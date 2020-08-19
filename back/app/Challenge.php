<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Requests\ChallengeRequest;


class Challenge extends Model
{

    protected $fillable = [];

    /**
     * Preenche as colunas de um novo desafio no BD
     * 
     * @param ChallengeRequest      $request
     */
    public function createChallenge(ChallengeRequest $request) {
        $this->title = $request->title;
        $this->description = $request->description;
        $this->about = $request->about;
        $this->recommendation = $request->recommendation;
        $this->photo = $request->photo;
        $this->save();
    }

    /**
     * Atualiza as colunas de um desafio no BD
     * 
     * @param ChallengeRequest      $request
     */
    public function updateChallenge(ChallengeRequest $request) {
        if ($request->title) {
            $this->title = $request->title;
        }
        if ($request->description) {
            $this->description = $request->description;
        }
        if ($request->about) {
            $this->about = $request->about;
        }
        if ($request->recommendation) {
            $this->recommendation = $request->recommendation;
        }
        if ($request->photo) {
            $this->photo = $request->photo;
        }
        $this->save();
    }

    /**
     * Retorna relação com receitas
     * 
     * @return Relations\HasMAny
     */
    public function recipes() {
        return $this->hasMany('App\Recipe');
    }
}
