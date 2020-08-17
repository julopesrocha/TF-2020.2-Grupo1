import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDeslogPageRoutingModule } from './home-deslog-routing.module';

import { HomeDeslogPage } from './home-deslog.page';
import { PostsComponent } from '../../components/posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDeslogPageRoutingModule
  ],
  declarations: [HomeDeslogPage, PostsComponent]
})
export class HomeDeslogPageModule {}
