import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import { MustMatch } from '../../_helpers/must-match.validator';
import { ToastController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';

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


  constructor(public toastController: ToastController, public http: HttpClient, private router: Router, public formbuilder: FormBuilder, public authservice: AuthService, ) {
    this.registerForm = this.formbuilder.group({
      name:[null, [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      date_of_birth:[null, [Validators.required]],
      email:[null, [Validators.email, Validators.required]],
      gender:[null, [Validators.required]],
      password:[null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirm_password:[null, [Validators.required]],
      aboutme:[],

    }, { validator: MustMatch('password', 'confirm_password')}

    );
   }

   get f(){return this.registerForm.controls;}

  ngOnInit() {
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Esse email ja existe!',
      duration: 6000
    });
    toast.present();
  }

  GoToHome(){
    this.router.navigate(['/tabs/home']);
  }

  onSubmit(form) {
    // console.log(form);
     console.log(form.value);

    this.authservice.register(this.registerForm.value).subscribe(
      (res)=> {
        console.log(res);
        localStorage.setItem('userToken', res.success.token);
        // localStorage.setItem('username', res.success.token);
        this.router.navigate(['/tabs/home'])

      },

      (err)=> {
        console.log(err);

        if(err.error.email[0]=="Este e-mail já existe"){

          this.presentToast();
        }
      }
    );

}
}
