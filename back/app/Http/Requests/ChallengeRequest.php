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
            'name' => 'min:2|max: 20',
            'description' => 'min:2|max:500',
            'tag' => 'min:3|max:30',
        ];
    }

    public function messages(){
        return [
            // Mensagens personalizadas
            'name.min' => 'O nome deve conter no mínimo 3 digitos',
            'name.max' => 'O nome deve conter no máximo 80 digitos',
            'description.min' => 'A descrição deve conter no mínimo 3 digitos',
            'description.max' => 'A descrição conter no máximo 500 digitos',
            'tag.min' => 'A tag deve conter no mínimo 3 digitos',
            'tag.max' => 'A tag deve conter no máximo 30 digitos',
        ];
    }
}
