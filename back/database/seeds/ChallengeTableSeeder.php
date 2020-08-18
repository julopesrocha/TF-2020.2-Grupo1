<?php

use Illuminate\Database\Seeder;

class ChallengeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\Challenge::class, 10)->create();

        App\Challenge::create([
            'title' => 'Desafio Low Carb',
            'description' => 'O Desafio Low Carb é um programa para ensinar
                              as pessoas a colocar em prática esse estilo
                              alimentar de um jeito POSITIVO, SEM RADICALISMOS,
                              que oferece RESULTADOS duradouros.',
            'about' => 'Os carboidratos apresentam como principal função a
                        função energética. Entretanto, os carboidratos possuem
                        funções que vão além de garantir a energia para as
                        células, estando eles relacionados também com a
                        estrutura dos ácidos nucleicos e funções estruturais',
            'recommendation' => 'Recomendado para pessoas
                                 que buscam perder peso',
        ]);

        App\Challenge::create([
            'title' => 'Desafio Zero Açucar',
            'description' => 'O Desafio Zero Açucar é um programa para ensinar
                              as pessoas a colocar em prática esse estilo
                              alimentar de um jeito POSITIVO, SEM RADICALISMOS,
                              que oferece RESULTADOS duradouros.',
            'about' => 'Mais comum para adoçar bebidas e preparações.
                        Suas principais fontes: frutas, cana-de-açúcar, 
                        raízes e sementes. Ele pode se apresentar 
                        de diversas formas',
            'recommendation' => 'Ideal para pessoas com glicose alta',
        ]);

        App\Challenge::create([
            'title' => 'Desafio sem Gordura',
            'description' => 'O Desafio sem gordura é um programa para ensinar
                              as pessoas a colocar em prática esse estilo
                              alimentar de um jeito POSITIVO, SEM RADICALISMOS,
                              que oferece RESULTADOS duradouros.',
            'about' => 'As gorduras (ou lipídeos), bem como as proteínas e
                        carboidratos, fazem parte de um grupo chamado de
                        macronutrientes. Elas formam estruturas grandes e,
                        por isso, precisam ser quebradas em pedaços muito
                        menores para serem devidamente absorvidas pelo 
                        organismo.',
            'recommendation' => 'Recomendado para pessoas com excesso de peso',
        ]);
    }
}
