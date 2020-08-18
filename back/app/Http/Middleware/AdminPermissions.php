<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\Challenge;

class AdminPermissions
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
        if ($user->privileged){
            return $next($request);
        }
        else{
            return response()->json(["You're unauthorized! Please verify if you are an admin!"], 401);
        }
    }
}
