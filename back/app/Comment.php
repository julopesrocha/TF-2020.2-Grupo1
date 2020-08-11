<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\CommentRequest;
use Auth;

class Comment extends Model
{
    public function user(){
        return $this->belongsTo('App\User');
    }

    public function recipe(){
        return $this->hasOne('App\Recipe');
    }

    public function postComment(CommentRequest $request){
        $this->comment = $request->comment;
        $this->save();
    }

    public function updateComment(CommentRequest $request){
        if ($request->comment)
            $this->comment = $request->comment;
        $this->save();
    }

    public function setRecipe($recipe_id){
        $recipe = Recipe::findOrFail($recipe_id);
        $this->recipe_id = $recipe_id;
        $this->save();
    }

    public function setUser($user_id) {
        $user = User::findOrFail($user_id);
        $this->user_id = $user_id;
        $this->save();
    }
}
