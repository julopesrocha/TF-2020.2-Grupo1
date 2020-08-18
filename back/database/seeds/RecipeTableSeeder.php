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
        /* factory(App\Recipe::class, 30)->create()->each(function ($recipe) {
            $recipe->setUser($recipe->id % 20 + 1);
            $recipe->setChallenge($recipe->id % 10 + 1);
        }); */

        App\Recipe::create([
            'title' => 'Bolo de cenoura fit',
            'ingredients' => '1/2 xícara (chá) de óleo
                              3 cenouras médias raladas
                              4 ovos
                              2 xícaras (chá) de açúcar
                              2 e 1/2 xícaras (chá) de farinha de trigo
                              1 colher (sopa) de fermento em pó',
            'preparation' => 'Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.
                              Acrescente o açúcar e bata novamente por 5 minutos.
                              Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.
                              Acrescente o fermento e misture lentamente com uma colher.
                              Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.',
            'subtitle' => 'Melhor bolo que já comi',
            'user_id' => 2,
            'challenge_id' => 1,
        ]);

        App\Recipe::create([
            'title' => 'Torta de Frango Low Carb',
            'ingredients' => '6 ovos
                              1 caixinha de creme de leite
                              1 colher (sopa) de requeijão
                              100 g mussarela ralada
                              500 g de peito de frango desfiado
                              cebola
                              tomate
                              1 1/2 colher (café) de fermento em pó',
            'preparation' => 'Refogue o peito de frango e faça um molho de sua preferência.
                              Em uma forma untada com azeite ou manteiga,
                              coloque uma camada de massa, depois o recheio e por ultimo o restante da massa.
                              Assar em forno alto por 30 minutos.',
            'subtitle' => 'Ideal para quem como pouco carboidrato',
            'user_id' => 4,
            'challenge_id' => 1,
        ]);

        App\Recipe::create([
            'title' => 'Torta de Couve flor saudavel',
            'ingredients' => '- 0,5 unidades grandes de Couve-flor cozida
                              - 3,0 unidades de Ovo de galinha cru
                              - 6,0 colheres (sopa) de Creme de leite Itambé
                              - Sal refinado à gosto
                              - Pimenta do reino em pó à gosto
                              - 1,0 colher (sopa) de Fermento em pó químico
                              - 150,0 gramas de Carne moída refogada (acém)
                              - 3,0 colheres (sopa) de Queijo parmesão ralado Quatá',
            'preparation' => 'triturar bem a couve flor no liquidificador,
                              até ela ficar bem fininha, parecendo uma farofa.
                              Reserve. Em uma vasilha, bata os 3 ovos com
                              o creme de leite e adicione sal, pimenta e 
                              1 colher de fermento. Acrescente a couve flor
                              triturada a essa vasilha e misture bem.
                              Acrescente a carne moída já refogada e
                              temperada à vasilha e misture mais.',
            'subtitle' => 'Ajuda muito quem quer manter a dieta',
            'user_id' => 3,
            'challenge_id' => 1,
        ]);

        App\Recipe::create([
            'title' => 'Bolo de abóbora recheado',
            'ingredients' => '1/2 xícara (chá) de óleo
                              3 cenouras médias raladas
                              4 ovos
                              2 xícaras (chá) de açúcar
                              2 e 1/2 xícaras (chá) de farinha de trigo
                              1 colher (sopa) de fermento em pó',
            'preparation' => 'Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.
                              Acrescente o açúcar e bata novamente por 5 minutos.
                              Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.
                              Acrescente o fermento e misture lentamente com uma colher.
                              Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.',
            'subtitle' => 'Bom para servir em eventos com aperitivos',
            'user_id' => 2,
            'challenge_id' => 1,
        ]);

        App\Recipe::create([
            'title' => 'Torta de limão 100% orgânica',
            'ingredients' => '- 0,5 unidades grandes de Couve-flor cozida
                              - 3,0 unidades de Ovo de galinha cru
                              - 6,0 colheres (sopa) de Creme de leite Itambé
                              - Sal refinado à gosto
                              - Pimenta do reino em pó à gosto
                              - 1,0 colher (sopa) de Fermento em pó químico
                              - 150,0 gramas de Carne moída refogada (acém)
                              - 3,0 colheres (sopa) de Queijo parmesão ralado Quatá',
            'preparation' => 'triturar bem a couve flor no liquidificador,
                              até ela ficar bem fininha, parecendo uma farofa.
                              Reserve. Em uma vasilha, bata os 3 ovos com
                              o creme de leite e adicione sal, pimenta e 
                              1 colher de fermento. Acrescente a couve flor
                              triturada a essa vasilha e misture bem.
                              Acrescente a carne moída já refogada e
                              temperada à vasilha e misture mais.',
            'subtitle' => 'Meus filhos adoraram essa torta',
            'user_id' => 5,
            'challenge_id' => 1,
        ]);
    }
}
