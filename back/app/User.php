<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Http\Requests\UserRequest;
use Laravel\Passport\HasApiTokens;
    
class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function createUser(UserRequest $request){
        $this->name = $request->name;
        $this->email = $request->email;
        $this->password = bcrypt($request->password);
        $this->photo = $request->photo;
        $this->gender = $request->gender;
        $this->date_of_birth = $request->date_of_birth;
        $this->save();
    }

    public function recipes() {
        return $this->hasMany('App/Recipe');
    }

    // Relação da postagem de comentários com a comments
    public function commentsMadeByUser(){
        return $this->hasMany('App\Comment');    
    }

    public function follower(){
        return $this->belongsToMany('App\User', 'follows', 'follower_id',  'following_id');    
    }

    public function following(){
        return $this->belongsToMany('App\User', 'follows', 'following_id', 'follower_id');
    }
}
