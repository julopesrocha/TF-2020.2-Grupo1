<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Recipe;

class RecipeRequest extends FormRequest
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
            'title' => 'min:3|max:80',
            'ingredients' => 'min:3|max:500',
            'preparation' => 'min:3|max:600',
            'subtitle' => 'min:3|max:240',
        ];
    }

    public function messages(){
        return [
            // Mensagens personalizadas
            'title.min' => 'O nome deve conter no mínimo 3 digitos',
            'title.max' => 'O nome deve conter no máximo 80 digitos',
            'ingredients.min' => 'A lista de ingredientes deve conter no mínimo 3 digitos',
            'ingredients.max' => 'A lista de ingredientes conter no máximo 500 digitos',
            'preparation.min' => 'O modo de preparo deve conter no mínimo 3 digitos',
            'preparation.max' => 'O modo de preparo deve conter no máximo 600 digitos',
            'subtitle.min' => 'A legenda deve conter no mínimo 3 digitos',
            'subtitle.max' => 'A legenda deve conter no máximo 240 digitos',
        ];
    }
}
