<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Challenge;
use Faker\Generator as Faker;

$factory->define(Challenge::class, function (Faker $faker) {
    return [
        'title' => $faker->words($nb = 4, $asText = true),
        'description' => $faker->words($nb = 15, $asText = true),
        'about' => $faker->words($nb = 8, $asText = true),
        'recommendation' => $faker->words($nb = 7, $asText = true),
    ];
});
