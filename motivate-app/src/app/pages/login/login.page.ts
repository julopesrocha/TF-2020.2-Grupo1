import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerForm: FormGroup;

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      
      email:[null, [Validators.email, Validators.required]],
      password:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      
    })
   }

  ngOnInit() {
  }

}
