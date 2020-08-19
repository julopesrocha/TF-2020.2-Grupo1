<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;
use App\Challenge;

class Recipes extends JsonResource
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
            'title' => $this->title,
            'ingredients' => $this->ingredients,
            'preparation' => $this->preparation,
            'subtitle' => $this->subtitle,
            'photo' => $this->photo,
            'user_name' =>  User::findOrFail($this->user_id)->name,
            'user_photo' => User::findOrFail($this->user_id)->photo,
            'user_id' => $this->user_id,
            'challenge_title' => Challenge::findOrFail($this->challenge_id)->title,
            'challenge_photo' => Challenge::findOrFail($this->challenge_id)->photo,
            'challenge_id' => $this->challenge_id,
            'likes' => $this->likes()->count(),
            'created_at' => $this->created_at,
        ];
    }
}
