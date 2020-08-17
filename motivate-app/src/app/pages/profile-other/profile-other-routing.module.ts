import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileOtherPage } from './profile-other.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileOtherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileOtherPageRoutingModule {}
