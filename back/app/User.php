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

    /**
     * Adiciona uma nova conta de usuário no BD
     * 
     * @param UserRequest       $request
     * 
     */
    public function createUser(UserRequest $request) {
        $this->name = $request->name;
        $this->email = $request->email;
        $this->password = bcrypt($request->password);
        $this->photo = $request->photo;
        $this->gender = $request->gender;
        $this->date_of_birth = $request->date_of_birth;
        $this->aboutme = $request->aboutme;
        $this->save();

        return $this;
    }
    /**
     * Retorna um novo usuário
     * 
     * @return User
     * 
     */

    /**
     * Atualiza os atributos de um usuário existente
     * 
     * @param UserRequest       $request
     * 
     */    
    public function updateUser(userRequest $request) {
        if ($request->name) {
            $this->name = $request->name;
        }
        if ($request->email) {
            $this->email = $request->email;
        }
        if ($request->password) {
            $this->password = $request->password;
        }
        if ($request->photo) {
            $this->photo = $request->photo;
        }
        if ($request->gender) {
            $this->gender = $request->gender;
        }
        if ($request->date_of_birth) {
            $this->date_of_birth = $request->date_of_birth;
        }

        if ($request->aboutme){
            $this->aboutme = $request->aboutme;
        }

        $this->save();
    }

    /**
     * Relação do usuário com muitas receitas
     * 
     * @return Relations\HasMany
     */
    public function recipes() {
        return $this->hasMany('App\Recipe');
    }

    /**
     * Relação do usuário com comentários
     * 
     * @return Relations\HasMany
     * 
     */
    public function commentsMadeByUser(){
        return $this->hasMany('App\Comment');    
    }

    /**
     * Relação de seguir um usuário
     * 
     * @return Relations\BelongsToMany
     * 
     */
    public function follower(){
        return $this->belongsToMany('App\User', 'follows', 'follower_id',
                                    'following_id');    
    }


    /**
     * Relação de ser seguido por um usuário
     * 
     * @return Relations\BelongsToMany
     * 
     */
    public function following(){
        return $this->belongsToMany('App\User', 'follows', 'following_id', 
                                    'follower_id');
    }

    /**
     * Função para seguir um usuário
     * 
     * @param int       $user_id
     *  
     */ 
    public function followUser($user_id) {
        $user = User::findOrFail($user_id);
        $this->follower()->attach($user);
    }
    
    /**
     * Função para parar de seguir um usuário
     * 
     * @param int       $user_id
     * 
     */
    public function unfollowUser($user_id){
        $user = User::findOrFail($user_id);
        $this->follower()->detach($user);
    }

    /**
     * Relação de um post curtido por um usuário 
     * 
     * @return  Relations\BelongsToMany
     * 
     */
    public function likeMadeByUser(){
        return $this->belongsToMany('App\Recipe', 'likes', 'user_id', 
                                    'recipe_id');
    }

    /**
     * Função para aumentar a curtida de uma receita
     * 
     * @param int       $id
     * 
     */
    public function likeUp($id){
        $this->likeMadeByUser()->attach($id);
        $this->save();
    }

    /**
     * Função para diminuir a curtida de uma receita
     * 
     * @param int       $id
     * 
     */
    public function likeDown($id){
        $this->likeMadeByUser()->detach($id);
        $this->save();
    }
}
