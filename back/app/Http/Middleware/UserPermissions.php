<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\User;

class UserPermissions
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user();
        $check = User::findOrFail($request->user_id);
        if ($user->id == $check->id || $user->privileged == 1)
            return $next($request);
        else{
            return response()->json(["You don't have permission to this!"], 401);
        }
    }
}
