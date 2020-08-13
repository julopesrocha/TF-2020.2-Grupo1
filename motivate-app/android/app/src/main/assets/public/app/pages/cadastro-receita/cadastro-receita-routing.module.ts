import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroReceitaPage } from './cadastro-receita.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroReceitaPageRoutingModule {}
