<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

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
            'likes' => $this->likes()->count(),
            'created_at' => $this->created_at,
        ];
    }
}
