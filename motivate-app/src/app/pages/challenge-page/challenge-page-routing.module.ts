import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengePagePage } from './challenge-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengePagePageRoutingModule {}
