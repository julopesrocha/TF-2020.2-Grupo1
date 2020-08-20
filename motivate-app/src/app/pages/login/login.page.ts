import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitted=true;
  usuario;



  constructor(public toastController: ToastController, public formbuilder: FormBuilder, private router: Router, public authservice: AuthService) {
    this.details();
    this.loginForm = this.formbuilder.group({

      email:[null, [Validators.email, Validators.required]],
      password:[null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],

    })
   }

   get f(){return this.loginForm.controls;}

   async presentToast(){
    const toast = await this.toastController.create({
      message: 'Email ou senha incorretos!',
      duration: 6000
    });
    toast.present();
  }

  async loginEfetuadoToast(){
    const toast = await this.toastController.create({
      message: 'Você entrou! :D',
      duration: 4000
    });
    toast.present();
    toast.onDidDismiss().then(() => {
      this.router.navigate(["/tabs/home"]).then(()=>window.location.reload());

    });
  }

  details() {
    this.authservice.showMyDetails().subscribe(
        (res) => {
            console.log(res);
            console.log("Esse é você");
            this.usuario = res[0];
        },
        (err) =>{
          console.log(err);
        }
    );

}

  submitForm(form){
    console.log(form.value);
    this.authservice.login(this.loginForm.value).subscribe(
      (res)=> {
        console.log(res);
        localStorage.setItem('userToken', res.success.token);
        this.loginEfetuadoToast();
        console.log("entrei");
      },
        (err)=> {
          console.log(err);

          if(err.error.error=="Unauthorized"){

            this.presentToast();
          }
        }
        );
      }

  GoToRegister(){
    this.router.navigate(['/cadastro-usuario']);
  }

  GoToHome(){
    this.router.navigate(['/tabs/home']);
  }

  ngOnInit() {
  }

}
