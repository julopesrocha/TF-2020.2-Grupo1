<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Users extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'photo' => $this->photo,
            'aboutme' => $this->aboutme,
            'gender' => $this->gender,
            'date_of_birth' => $this->date_of_birth,
            'privileged' => $this->privileged,
            'created_at' => $this->created_at,
            'followers' => $this->following()->get()->count(),
            'following' => $this->follower()->get()->count(),
        ];
    }
}
