<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'name' => 'user 1',
            'email' => 'user1@email.com',
            'password' => bcrypt('123456'),
            'aboutme' => 'lorem ipsum',
            'gender' => 'female',
            'date_of_birth' => '01/01/2001',
        ]);

        App\User::create([
            'name' => 'admin',
            'email' => 'admin@email.com',
            'password' => bcrypt('admin123'),
            'aboutme' => 'lorem ipsum',
            'gender' => 'male',
            'date_of_birth' => '03/03/1993',
            'privileged' => 1,
        ]);

        factory(App\User::class, 20)->create();

        for ($i = 1; $i <= 22; $i++){
            for ($j = 1; $j < 6; $j++) {
                $user = App\User::findOrFail($i);
                $user->followUser(($i + $j) % 20 + 1);
            }
        }
    }
}
