import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileOtherPageRoutingModule } from './profile-other-routing.module';

import { ProfileOtherPage } from './profile-other.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileOtherPageRoutingModule
  ],
  declarations: [ProfileOtherPage]
})
export class ProfileOtherPageModule {}
