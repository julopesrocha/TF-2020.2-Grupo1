import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowUsersPage } from './follow-users.page';

const routes: Routes = [
  {
    path: '',
    component: FollowUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowUsersPageRoutingModule {}
