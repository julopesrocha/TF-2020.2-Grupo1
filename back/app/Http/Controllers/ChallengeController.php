<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChallengeRequest;
use App\Recipe;
use App\Challenge;

class ChallengeController extends Controller
{
    /**
     * Cria um novo desafio no DB
     * 
     * @param ChallengeRequest      $request
     * 
     * @return JsonResponse
     */
    public function postChallenge(ChallengeRequest $request) {
        $newChallenge = new Challenge;
        $newChallenge->createChallenge($request);
        return response()->json(['challenge' => $newChallenge], 200);
    }

    /**
     * Retorna o desafio correspondente ao id fornecido
     * 
     * @param int       $id
     * 
     * @return JsonResponse
     */
    public function getChallenge($id) {
        $challenge = Challenge::findOrFail($id);
        return response()->json(['challenge' => $challenge], 200);
    }

    /**
     * Retorna todas os desafios do BD
     * 
     * @return JsonResponse
     */
    public function listChallenges() {
        $challengeList = Challenge::all();
        $orderedList = $challengeList->sortBy(
                'title',
                SORT_NATURAL|SORT_FLAG_CASE
                )->values()->all();
        return response()->json(['challengeList' => $orderedList], 200);
    }

    /**
     * Atualiza os dados do desafio corresponente ao id
     * 
     * @param ChallengeRequest      $request
     * @param int                   $id
     * 
     * @return JsonResponse
     */
    public function updateChallenge(ChallengeRequest $request, $id) {
        $challenge = Challenge::findOrFail($id);
        $challenge->updateChallenge($request);
        return response()->json(['challenge' => $challenge], 200);
    }

    /**
     * Deleta a receita correspondente ao id
     * 
     * @param int       $id
     * 
     * @return JsonResponse
     */
    public function deleteChallenge($id) {
        Challenge::findOrFail($id);
        Challenge::destroy($id);
        return response()->json(['Challenge deleted'], 200);
    }
}
