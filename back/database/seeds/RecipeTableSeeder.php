<?php

use Illuminate\Database\Seeder;
use App\User;

class RecipeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Recipe::class, 30)->create()->each(function ($recipe) {
            $recipe->setUser($recipe->id % 20 + 1);
            $recipe->setChallenge($recipe->id % 10 + 1);
        });
    }
}
