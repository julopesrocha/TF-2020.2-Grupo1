import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerForm: FormGroup;
  submitted=true;

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formbuilder.group({
      
      email:[null, [Validators.email, Validators.required]],
      password:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      
    })
   }

   get f(){return this.registerForm.controls;}

   
  VaiproCadastro(){
    this.router.navigate(['/cadastro-usuario']);
  }

  ngOnInit() {
  }

}
