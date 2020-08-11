import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  /*import * as moment from 'moment';

doSomething(date) {
   console.log('date', moment(date).format('YYYY-MM-DD')); // 2019-04-22
}*/

  registerForm: FormGroup;
  submitted=true;

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name:[null, [Validators.required, Validators.maxLength(20)]],
      dateOfBirth:[null, [Validators.required]],
      email:[null, [Validators.email, Validators.required]],
     
      status:[null, [Validators.required]],
      password:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      passwordConfirmation:[null, [Validators.required]]

    }, { validator: MustMatch('password', 'passwordConfirmation')}
      
    );
   }

   get f(){return this.registerForm.controls;}

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(form.value);
  }

}
