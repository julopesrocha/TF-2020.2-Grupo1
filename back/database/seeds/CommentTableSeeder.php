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
        factory(App\Comment::class, 60)->create()->each(function ($comment) {
            $comment->setUser($comment->id % 20 + 1);
            $comment->SetRecipe($comment->id % 30 + 1);
        });
    }
}
