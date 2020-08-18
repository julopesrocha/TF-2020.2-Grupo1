<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

class Comments extends JsonResource
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
            'comment' => $this->comment,
            'created_at' => $this->created_at,
            'user_name' =>  User::findOrFail($this->user_id)->name,
            'user_photo' => User::findOrFail($this->user_id)->photo,
            'user_id' => $this->user_id,
            'recipe_id' => $this->recipe_id,
        ];
    }
}
