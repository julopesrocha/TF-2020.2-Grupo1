<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Auth;
use App\User;
use DB;

class UserController extends Controller
{
    // Update
    public function editUserProfile(UserRequest $request) {
        $user = Auth::user();
        $user->updateUser($request);
        return response()->json(['user'=>$user], 200);
    }

    // relação com seguidores
    public function followUser($user_id){
        $user = Auth::user();
        $userFollowing = User::findOrFail($user_id);
        if ($user->id != $userFollowing->id){
            $status = DB::table('follows')->where('following_id',$user_id)->where('follower_id',$user->id)->count()>0;
            if ($status){
                $user->unfollowUser($user_id);
                return response()->json(['No longer following '.$userFollowing->name], 200);
            } 
            else {
                $user->followUser($user_id);
                return response()->json(['following'=> "You're following ". $userFollowing->name], 200);
            }
        }
        return response()->json(['error'=>'You can\'t follow yourself'], 422);
    }

    public function getFollowers(){
        $user = Auth::user();
        $userFollower = $user->follower()->get();
        return response()->json(['userFollower' => $userFollower], 200);
    }

    public function getFollowersOfUser($user_id) {
        $user = User::findOrFail($user_id);
        $userFollower = $user->following()->get();
        return response()->json(['userFollower' => $userFollower], 200);
    }
    
    public function getFollowing(){
        $user = Auth::user();
        $userFollowing = $user->following()->get();
        return response()->json(['userFollowing' => $userFollowing], 200);

    }

    public function getUserFollowing($user_id) {
        $user = User::findOrFail($user_id);
        $userFollowing = $user->follower()->get();
        return response()->json(['userFollowing' => $userFollowing], 200);
    }

}
