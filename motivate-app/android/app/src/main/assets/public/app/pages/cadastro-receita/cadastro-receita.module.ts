import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroReceitaPageRoutingModule } from './cadastro-receita-routing.module';

import { CadastroReceitaPage } from './cadastro-receita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastroReceitaPageRoutingModule
  ],
  declarations: [CadastroReceitaPage]
})
export class CadastroReceitaPageModule {}
