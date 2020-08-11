<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Comment;
use Auth;


class CommentController extends Controller
{
    public function postComment(CommentRequest $request, $recipe_id){
        $user = Auth::user();
        $newComment = new Comment;
        $newComment->postComment($request);
        $newComment->setUser($user->id);
        $newComment->setRecipe($recipe_id);
        return response()->json($newComment);
    }
    
    public function updateComment(CommentRequest $request, $id){
        $user = Auth::user();
        $comment = Comment::findOrFail($id);
        $comment->updateComment($request);
        return response()->json($comment);
    }

    public function getComment($id){
        $comment = Comment::findOrFail($id);
        return response()->json($comment);
    }

    public function deleteComment($comment_id){
        $user = Auth::user();
        Comment::destroy($comment_id);
        return response()->json(['O seu comentário foi deletado com sucesso.']);
    }
}
