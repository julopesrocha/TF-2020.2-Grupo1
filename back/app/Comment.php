<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\CommentRequest;

class Comment extends Model
{
    public function user(){
        return $this->belongsTo('App\User');
    }

    public function recipe(){
        return $this->hasOne('App\Recipe');
    }

    public function createComment(CommentRequest $request){
        $this->comment = $request->comment;
        $this->user_id = $request->user_id;
        $this->save();
    }

    public function setUser($user_id){
        $user = User::findOrFail($user_id);
        $this->user_id = $user_id;
        $this->save();
    }

}
