import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDesafioPage } from './cadastro-desafio.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDesafioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDesafioPageRoutingModule {}
