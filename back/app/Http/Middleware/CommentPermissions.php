<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\Comment;

class CommentPermissions
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
        $comment = Comment::with('user')->where('user_id', $user->id)->where('id', $request->comment_id)->first();
        if ($comment || $user->privileged == 1)
            return $next($request);
        else{
            return response()->json(["You don't have permission to this!"], 401);
        }
    }
}
