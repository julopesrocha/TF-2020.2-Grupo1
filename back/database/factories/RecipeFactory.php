<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Recipe;
use Faker\Generator as Faker;

$factory->define(Recipe::class, function (Faker $faker) {
    return [
        'title' => $faker->words($nb = 4, $asText = true),
        'ingredients' => $faker->words($nb = 15, $asText = true),
        'preparation' => $faker->words($nb = 30, $asText = true),
        'subtitle' => $faker->words($nb = 8, $asText = true),
    ];
});
