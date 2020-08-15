<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\User;
use DB;

class UserController extends Controller
{
    public function followUser($user_id){
        $user = Auth::user();
        $userFollowing = User::findOrFail($user_id);
        if ($user->id != $userFollowing->id){
            $status = DB::table('follows')->where('following_id',$user_id)->where('follower_id',$user->id)->count()>0;
            if ($status){
                $user->follower()->detach($user_id);
                return response()->json(['Você parou de seguir '.$userFollowing->name]);
            } 
            else {
                $user->follower()->attach($userFollowing->id);
                return response()->json(['Você está seguindo '.$userFollowing->name]);
            }
        }
        return response()->json(['ERRO: Você não pode seguir você mesmo']);
    }

    public function getFollowers(){
        $user = Auth::user();
        $userFollower = $user->follower()->get();
        return response()->json($userFollower);
    }
    
    public function getFollowing(){
        $user = Auth::user();
        $userFollowing = $user->following()->get();
        return response()->json($userFollowing);

    }

}
