<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;


class Challenge extends Model
{
    //Create
    public function createChallenge(Request $request) {
        $this->title = $request->title;
        $this->description = $request->description;
        $this->about = $request->about;
        $this->recommendation = $request->recommendation;
        $this->photo = $request->photo;
        $this->save();
    }

    // Update
    public function updateChallenge(Request $request) {
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

    // Relação com receitas
    public function recipes() {
        return $this->hasMany('App/Recipe');
    }
}
