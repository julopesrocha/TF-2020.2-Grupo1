import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-desafio',
  templateUrl: './cadastro-desafio.page.html',
  styleUrls: ['./cadastro-desafio.page.scss'],
})
export class CadastroDesafioPage implements OnInit {

  challengeForm: FormGroup;

  constructor(private router: Router, public formbuilder: FormBuilder) { 

    this.challengeForm = this.formbuilder.group({
      title:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      description:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      about:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      recomendation:[null, [Validators.maxLength(500)]],

    }
      
    );
   }

   onSubmit(form){
     console.log(form.value);
   }
  

  ngOnInit() {
  }

}
