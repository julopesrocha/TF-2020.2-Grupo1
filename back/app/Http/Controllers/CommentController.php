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
    // Cria um comentário
    public function postComment(CommentRequest $request, $recipe_id){
        $user = Auth::user();
        $newComment = new Comment;
        $newComment->postComment($request);
        $newComment->setUser($user->id);
        $newComment->setRecipe($recipe_id);
        return response()->json(['success' => new CommentResource($newComment)], 200);
    }

    // Atualiza um comentário
    public function updateComment(CommentRequest $request, $id){
        $user = Auth::user();
        $comment = Comment::findOrFail($id);
        $comment->updateComment($request);
        return response()->json(['success' => new CommentResource($comment)], 200);
    }

    // Procura por um comentário específico
    public function getComment($id){
        $comment = Comment::findOrFail($id);
        return response()->json(['success' => new CommentResource($comment)], 200);
    }

    // Lista todos os comentários relacionados a uma receita específica
    public function listComments($recipe_id){
        $commentList = Comment::where('recipe_id', $recipe_id)->get();
        $sortedList = $commentList->sortByDesc('created_at');
        return response()->json(['commentList' => CommentResource::collection($sortedList)], 200);
    }

    // Deleta um comentário 
    public function deleteComment($comment_id){
        Comment::findOrFail($comment_id);
        Comment::destroy($comment_id);
        return response()->json(['Your comment has been successfully deleted.'], 200);
    }
}
