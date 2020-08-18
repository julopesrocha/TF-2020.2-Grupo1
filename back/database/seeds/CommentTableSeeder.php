<?php

use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* factory(App\Comment::class, 60)->create()->each(function ($comment) {
            $comment->setUser($comment->id % 20 + 1);
            $comment->SetRecipe($comment->id % 30 + 1);
        }); */

        App\Comment::create([
            'comment' => 'Gostei bastante',
            'user_id' => 3,
            'recipe_id' => 1
        ]);

        App\Comment::create([
            'comment' => 'Não achei lá essas coisa :/',
            'user_id' => 4,
            'recipe_id' => 1
        ]);

        App\Comment::create([
            'comment' => 'Esse bolo é bom demais!',
            'user_id' => 5,
            'recipe_id' => 1
        ]);
    }
}
