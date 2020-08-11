import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitted=true;

  submitForm(form){
    console.log("entrei");
    console.log(form.value);

    this.authservice.login(this.loginForm.value).subscribe(
      (res)=> {
        console.log(res);
        localStorage.setItem('userToken', res.success.token);
        this.router.navigate(['/tabs/tab1'])
      },
      (err)=>{
        console.log(err);
      }
    )

  }

  constructor(public formbuilder: FormBuilder, private router: Router, public authservice: AuthService) {
    this.loginForm = this.formbuilder.group({
      
      email:[null, [Validators.email, Validators.required]],
      password:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      
    })
   }

   get f(){return this.loginForm.controls;}

   
  VaiproCadastro(){
    this.router.navigate(['/cadastro-usuario']);
  }

  VaipraHomeDeslog(){
    this.router.navigate(['/tabs/home']);
  }

  ngOnInit() {
  }

}
