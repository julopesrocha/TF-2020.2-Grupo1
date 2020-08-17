import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.page.html',
  styleUrls: ['./cadastro-receita.page.scss'],
})
export class CadastroReceitaPage implements OnInit {

  recipeForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private router: Router) { 
    this.recipeForm = this.formbuilder.group({
      title:[null, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
      challenge:[null, [Validators.required]],
      subtitle:[null],
      ingredients:[null, [Validators.required, Validators.maxLength(500), Validators.minLength(3)]],
      preparation_mode: [null, [Validators.required, Validators.maxLength(600), Validators.minLength(3)]]
      

    }
      
    );
   }

   onSubmit(form){
     console.log(form.value);
   }

   

  ngOnInit() {
  }

}
