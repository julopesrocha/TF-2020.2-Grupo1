import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  registerForm: FormGroup;

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name:[null, [Validators.required, Validators.maxLength(20)]],
      password:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      email:[null, [Validators.email, Validators.required]],
      dateOfBirth:[null, [Validators.required]],
      status:[null, [Validators.required]],
    })
   }

  ngOnInit() {
  }

}
