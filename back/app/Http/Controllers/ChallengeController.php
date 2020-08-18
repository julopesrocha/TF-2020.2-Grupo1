<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChallengeRequest;
use App\Recipe;
use App\Challenge;

class ChallengeController extends Controller
{
    //Create
    public function postChallenge(ChallengeRequest $request) {
        $newChallenge = new Challenge;
        $newChallenge->createChallenge($request);
        return response()->json(['challenge' => $newChallenge], 200);
    }

    //Read
    public function getChallenge($id) {
        $challenge = Challenge::findOrFail($id);
        return response()->json(['challenge' => $challenge], 200);
    }

    public function listChallenges() {
        $challengeList = Challenge::all();
        $orderedList = $challengeList->sortBy('title')->values()->all();
        return response()->json(['challengeList' => $orderedList], 200);
    }

    //Update
    public function updateChallenge(ChallengeRequest $request, $id) {
        $challenge = Challenge::findOrFail($id);
        $challenge->updateChallenge($request);
        return response()->json(['challenge' => $challenge], 200);
    }

    //Delete
    public function deleteChallenge($id) {
        Challenge::findOrFail($id);
        Challenge::destroy($id);
        return response()->json(['Challenge deleted'], 200);
    }
}
