<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Comment;
use App\Recipe;
use Auth;
use App\Http\Resources\Comments as CommentResource;


class CommentController extends Controller
{
    public function postComment(CommentRequest $request, $recipe_id){
        $user = Auth::user();
        $newComment = new Comment;
        $newComment->postComment($request);
        $newComment->setUser($user->id);
        $newComment->setRecipe($recipe_id);
        return response()->json(['success' => new CommentResource($newComment)], 200);
    }
    
    public function updateComment(CommentRequest $request, $id){
        $user = Auth::user();
        $comment = Comment::findOrFail($id);
        $comment->updateComment($request);
        return response()->json(['success' => new CommentResource($comment)], 200);
    }

    public function getComment($id){
        $comment = Comment::findOrFail($id);
        return response()->json(['success' => new CommentResource($comment)], 200);
    }

    public function listComments($recipe_id){
        $commentList = Comment::where('recipe_id', $recipe_id)->get();
        return response()->json(['commentList' => CommentResource::collection($commentList)], 200);
    }

    public function deleteComment($comment_id){
        Comment::destroy($comment_id);
        return response()->json(['Your comment has been successfully deleted.'], 200);
    }
}
