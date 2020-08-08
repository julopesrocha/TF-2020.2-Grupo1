import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

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

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name:[null, [Validators.required, Validators.maxLength(20)]],
      password:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      passwordConfirmation:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      email:[null, [Validators.email, Validators.required]],
      emailConfirmation: [null, [Validators.email, Validators.required]],
      dateOfBirth:[null, [Validators.required]],
      status:[null, [Validators.required]],
    })
   }

  ngOnInit() {
  }

}
