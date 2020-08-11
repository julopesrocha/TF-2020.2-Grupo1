<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Comment;
use Auth;


class CommentController extends Controller
{
    public function createComment(){
        if (($user = Auth::user()) == null) {
            return response()->json(['error'=>'Unauthorized'], 401);
        }
        $user = Auth::user();
        $newComment = new Comment;
        $newComment->createComment($request);
        return response()->json($newComment);
    }
}
