<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Auth;
use App\User;
use DB;
use App\Http\Resources\Users as UserResource;

class UserController extends Controller
{
    /*
    ---------------------------------------------------------------------------

                    READ | UPDATE | DELETE | RELATIONSHIPS

    ---------------------------------------------------------------------------

     */

    /**
     * Retorna o perfil de um usuário através de um respectivo ID
     * 
     * @param int       $user_id
     *  
     * @return JsonResponse
     */ 
    public function getUserProfile($user_id) {
        $user = User::findOrFail($user_id);
        return response()->json(['user'=>new UserResource($user)], 200);
    }

    /**
     * Atualiza os atributos de um usuário no BD
     * 
     * @param UserRequest       $request
     * 
     * @return JsonResponse
     * 
     */
    public function editUserProfile(UserRequest $request) {
        $user = Auth::user();
        $user->updateUser($request);
        return response()->json(['user'=>new UserResource($user)], 200);
    }

    /**
     * Deleta um usuário autenticado do BD
     * 
     * @param int       $user_id
     * 
     * @return JsonResponse
     * 
     */
    public function deleteUser(){
        $user = Auth::user();
        User::destroy($user->id);
        return response()->json(['User deleted'], 200);
    }

    /**
     * Verifica a situação que o usuário se encontra para realizar a ação
     * de seguir ou parar de seguir
     * 
     * @param int       $user_id
     * 
     * @return JsonResponse
     * 
     */
    public function followUser($user_id){
        $user = Auth::user();
        $userFollowing = User::findOrFail($user_id);
        if ($user->id != $userFollowing->id){
            $status = DB::table('follows')->where('following_id',$user_id)
                                          ->where('follower_id',$user->id)
                                          ->count()>0;
            if ($status){
                $user->unfollowUser($user_id);
                return response()->json([
                    'success' => 'No longer following '.$userFollowing->name,
                    'isFollowing' => false], 200);
            } 
            else {
                $user->followUser($user_id);
                return response()->json([
                    'success'=> "You're following ". $userFollowing->name,
                    'isFollowing' => true], 200);
            }
        }
        return response()->json(['error'=>'You can\'t follow yourself',
                                 'isFollowing' => false], 422);
    }

    /**
     * Retorna todos os usuários que o usuário logado está seguindo
     * 
     * @return JsonResponse
     * 
     */
    public function getFollowers(){
        $user = Auth::user();
        $userFollower = $user->follower()->get();
        $orderedList = $userFollower->sortBy('name', SORT_NATURAL|SORT_FLAG_CASE)
                                    ->values()->all();
        return response()->json([
            'userFollower' => UserResource::collection($orderedList)], 200);
    }

    /**
     * Retorna todos os usuários que estão seguindo o usuário logado
     * 
     * @return JsonResponse
     */
    public function getFollowing(){
        $user = Auth::user();
        $userFollowing = $user->following()->get();
        $orderedList = $userFollowing->sortBy('name', SORT_NATURAL|SORT_FLAG_CASE)
                                     ->values()->all();
        return response()->json([
            'userFollowing' => UserResource::collection($orderedList)], 200);

    }

    /**
     * Verifica se o usuário logado segue um usuário
     * 
     * @param int       $user_id
     * 
     * @return JsonResponse
     */
    public function isFollowing($user_id) {
        $user = Auth::user();
        User::findOrFail($user_id);
        $isFollowing = $user->follower()->get()->contains('id', $user_id);
        return response()->json(['isFollowing' => $isFollowing], 200);
    }

    /**
     * Retorna uma lista de usuários que um usuário segue
     * 
     * @param int       $user_id
     * 
     * @return JsonResponse
     * 
     */
    public function getUserFollowing($user_id) {
        $user = User::findOrFail($user_id);
        $userFollowing = $user->follower()->get();
        $orderedList = $userFollowing->sortBy('name', SORT_NATURAL|SORT_FLAG_CASE)
                                     ->values()->all();
        return response()->json([
            'userFollowing' => UserResource::collection($orderedList)], 200);
    }

    /**
     * Retorna uma lista de quem está seguindo um usuário
     * 
     * @param int       $user_id
     * 
     * @return JsonResponse
     */
    public function getFollowersOfUser($user_id) {
        $user = User::findOrFail($user_id);
        $userFollower = $user->following()->get();
        $orderedList = $userFollower->sortBy('name', SORT_NATURAL|SORT_FLAG_CASE)
                                    ->values()->all();
        return response()->json([
            'userFollower' => UserResource::collection($orderedList)], 200);
    }
}
