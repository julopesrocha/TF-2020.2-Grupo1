<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Challenge extends Model
{
    //Create
    public function createChallenge(Request $request) {
        $this->name = $request->name;
        $this->description = $request->description;
        $this->tag = $request->tag;
        $this->save();
    }

    // Update
    public function updateChallenge(Request $request) {
        if ($request->name) {
            $this->name = $request->name;
        }
        if ($request->description) {
            $this->description = $request->description;
        }
        if ($request->tag) {
            $this->tag = $request->tag;
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
