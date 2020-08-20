<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Challenge;

class ChallengeRequest extends FormRequest
{
    protected function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'min:2|max:40|unique:challenges,title',
            'description' => 'min:2|max:500',
            'about' => 'min:2|max:300',
            'recommendation' => 'max:500',
        ];
    }

    public function messages(){
        return [
            // Mensagens personalizadas
            'title.min' => 'O título deve conter no mínimo 2 digitos',
            'title.max' => 'O título deve conter no máximo 40 digitos',
            'title.unique' => 'Já existe um desafio com esse título',
            'description.min' => 'A descrição deve conter no mínimo 2 digitos',
            'description.max' => 'A descrição conter no máximo 500 digitos',
            'about.min' => 'O \'sobre\' deve conter no mínimo 2 digitos',
            'about.max' => 'O \'sobre\' conter no máximo 300 digitos',
            'recommendation.max' => 'A Recomendação conter no máximo 500 digitos',
        ];
    }
}
