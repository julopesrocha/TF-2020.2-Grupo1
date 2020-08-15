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
    public function followUser($user_id){
        $user = Auth::user();
        $userFollowing = User::findOrFail($user_id);
        if ($user->id != $userFollowing->id){
            $status = DB::table('follows')->where('following_id',$user_id)->where('follower_id',$user->id)->count()>0;
            if ($status){
                $user->follower()->detach($user_id);
                return response()->json(['No longer following '.$userFollowing->name], 200);
            } 
            else {
                $user->follower()->attach($userFollowing->id);
                return response()->json(['following'=>$userFollowing], 200);
            }
        }
        return response()->json(['error'=>'You can\'t follow yourself'], 422);
    }

    public function editUserProfile(UserRequest $request) {
        $user = Auth::user();
        $user->updateUser($request);
        return response()->json(['user'=>$user], 200);
    }
}
