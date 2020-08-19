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
            'name' => 'admin',
            'email' => 'admin@email.com',
            'password' => bcrypt('admin123'),
            'aboutme' => 'Profissional de gerenciamento de projetos de TI eficiente com mais de 5 anos de experiência e fortes habilidades de gerenciamento de fornecedores. Buscando melhorar custo, qualidade e tempo na McBain-Bessey International. Cortei custos de 23% na NSRB e treinei 83 funcionários nas práticas de Kaizen.',
            'gender' => 'male',
            'date_of_birth' => '03/03/1993',
            'privileged' => 1,
        ]);

        App\User::create([
            'name' => 'Lisa Grant',
            'email' => 'lisa.grant@email.com',
            'password' => bcrypt('123456'),
            'aboutme' => 'Representante de atendimento ao cliente voltado para objetivos com mais de 7 anos de experiência. Buscando usar habilidades comprovadas de televendas para aumentar a satisfação do cliente na Triple-P Components. Recebeu 98% de avaliações favoráveis de clientes na Gibbs-Atalah Electronics.',
            'gender' => 'female',
            'date_of_birth' => '06/05/1980',
        ]);

        App\User::create([
            'name' => 'Travis Nelson',
            'email' => 'travis.nelson@email.com',
            'password' => bcrypt('123456'),
            'aboutme' => 'Representante de vendas destruidor de cotas com mais de 6 anos de experiência. Procurando aumentar os KPIs de vendas da Gilead por meio de habilidades comprovadas na construção e fechamento de relacionamentos. Na Sanvartis, criou relacionamentos rígidos com 120 novos clientes.',
            'gender' => 'male',
            'date_of_birth' => '09/05/1981',
        ]);

        App\User::create([
            'name' => 'Cherly Green',
            'email' => 'cherly.Green@email.com',
            'password' => bcrypt('123456'),
            'aboutme' => 'Profissional de ciência da computação ágil com 2 estágios e vários projetos intensivos. Procurando resolver problemas para Sharon C. no Google com habilidades demonstradas em liderança e C #. Recomendado 5 vezes pela gerência da Pralucitronics por sua eficiência.',
            'gender' => 'female',
            'date_of_birth' => '08/01/1958',
        ]);

        App\User::create([
            'name' => 'Terri Thomas',
            'email' => 'terri.Thomas@email.com',
            'password' => bcrypt('123456'),
            'aboutme' => 'Designer gráfico talentoso com mais de 5 anos de experiência. Procurando fornecer design elegante para Timothy N. no Google por meio de habilidades gráficas comprovadas.',
            'gender' => 'others',
            'date_of_birth' => '12/06/1993',
        ]);

        App\User::create([
            'name' => 'Ken Lee',
            'email' => 'ken.lee@email.com',
            'password' => bcrypt('123456'),
            'aboutme' => 'Gerente de marketing de crescimento criativo com sólida experiência em vendas. Buscando aproveitar mais de 7 anos de experiência em marketing para aumentar os KPIs da QQT International.',
            'gender' => 'male',
            'date_of_birth' => '11/04/1948',
        ]);

        // factory(App\User::class, 20)->create();

        for ($i = 1; $i <= 6; $i++){
            for ($j = 1; $j < 2; $j++) {
                $user = App\User::findOrFail($i);
                $user->followUser(($i + $j) % 6 + 1);
            }
        }
    }
}
