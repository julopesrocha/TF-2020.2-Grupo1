import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowUsersPageRoutingModule } from './follow-users-routing.module';

import { FollowUsersPage } from './follow-users.page';
import { FollowListComponent } from '../../components/follow-list/follow-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowUsersPageRoutingModule
  ],
  declarations: [FollowUsersPage, FollowListComponent]
})
export class FollowUsersPageModule {}
