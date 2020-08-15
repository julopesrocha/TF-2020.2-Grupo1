import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDesafioPageRoutingModule } from './cadastro-desafio-routing.module';

import { CadastroDesafioPage } from './cadastro-desafio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastroDesafioPageRoutingModule
  ],
  declarations: [CadastroDesafioPage]
})
export class CadastroDesafioPageModule {}
