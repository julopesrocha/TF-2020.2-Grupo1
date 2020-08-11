<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\Challenge;

class ChallengeAdmin
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
        $challenge = Challenge::with('user')->where('user_id'-> $user->id)->where('id', $request->id)->first();
        if ($user->privileged == 1){
            return $next($request);
        }
        else{
            return response()->json(['Só administradores podem criar desafios.']);
        }
    }
}
