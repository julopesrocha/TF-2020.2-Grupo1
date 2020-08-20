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
    /**
     * Cria um novo comentário e a atribui a uma nova receita
     *
     * @param CommentRequest       $request
     * @param int                   $recipe_id
     *
     * @return JsonResponse
     */
    public function postComment(CommentRequest $request, $recipe_id){
        $user = Auth::user();
        $newComment = new Comment;
        $newComment->postComment($request);
        $newComment->setUser($user->id);
        $newComment->setRecipe($recipe_id);
        return response()->json(['success' => new CommentResource($newComment)],
                                200);
    }

    /**
     * Atualiza o atributo comentário do BD
     *
     * @param CommentRequest        $request
     * @param int       $id
     *
     * @return JsonResponse
     */
    public function updateComment(CommentRequest $request, $id){
        $user = Auth::user();
        $comment = Comment::findOrFail($id);
        $comment->updateComment($request);
        return response()->json([
            'success' => new CommentResource($comment)], 200);
    }

    /**
     * Retorna o comentário correspondente ao ID fornecido
     *
     * @param int       $id
     *
     * @return JsonResponse
     */
    public function getComment($id){
        $comment = Comment::findOrFail($id);
        return response()->json([
            'success' => new CommentResource($comment)], 200);
    }

    /**
     * Lista todos os comentários relacionados a uma receita específica
     *
     * @param int      $recipe_id
     *
     * @return JsonResponse
     */
    public function listComments($recipe_id){
        $commentList = Comment::where('recipe_id', $recipe_id)->get();
        $sortedList = $commentList->sortByDesc('created_at');
        return response()->json([
            'commentList' => CommentResource::collection($sortedList)], 200);
    }

    /**
     * Deleta um comentário correspondente ao ID fornecido
     *
     * @param int       $comment_id
     *
     * @return JsonResponse
     */
    public function deleteComment($comment_id){
        Comment::findOrFail($comment_id);
        Comment::destroy($comment_id);
        return response()->json([
            'The comment has been successfully delete.'], 200);
    }
}
