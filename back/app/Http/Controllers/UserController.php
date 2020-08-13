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
                return response()->json(['Você parou de seguir '.$userFollowing->name]);
            } 
            else {
                $user->follower()->attach($userFollowing->id);
                return response()->json(['Você está seguindo '.$userFollowing->name]);
            }
        }
        return response()->json(['error'=>'Você não pode seguir você mesmo'], 422);
    }

    public function editUserProfile(UserRequest $request) {
        $user = Auth::user();
        $user->updateUser($request);
        return response()->json([$user], 200);
    }
}
