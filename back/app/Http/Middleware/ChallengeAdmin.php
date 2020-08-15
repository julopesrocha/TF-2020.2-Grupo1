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
        if ($user->privileged){
            return $next($request);
        }
        else{
            return response()->json(['Só administradores podem criar desafios.']);
        }
    }
}
