import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDeslogPage } from './home-deslog.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDeslogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDeslogPageRoutingModule {}
