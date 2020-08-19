import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengePagePageRoutingModule } from './challenge-page-routing.module';

import { ChallengePagePage } from './challenge-page.page';
import { RecipesListComponent } from '../../components/recipes-list/recipes-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengePagePageRoutingModule
  ],
  declarations: [ChallengePagePage, RecipesListComponent]
})
export class ChallengePagePageModule {}
