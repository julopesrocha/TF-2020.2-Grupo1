<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;
use App\Challenge;

class ChallengeController extends Controller
{
    //Create
    public function postChallenge(request $request) {
        $newChallenge = new Challenge;
        $newChallenge->createChallenge($request);
        return response()->json([$newChallenge], 200);
    }

    //Read
    public function getChallenge($id) {
        $challenge = Challenge::findOrFail($id);
        return response()->json([$challenge], 200);
    }

    public function listChallenges() {
        $challengeList = Challenge::all();
        return response()->json([$challengeList], 200);
    }

    //Update
    public function updateChallenge(Request $request, $id) {
        $challenge = Challenge::findOrFail($id);
        $challenge->updateChallenge($request);
        return response()->json([$challenge], 200);
    }

    //Delete
    public function deleteChallenge($id) {
        Challenge::destroy($id);
        return response()->json(['Desafio deletado'], 200);
    }
}
