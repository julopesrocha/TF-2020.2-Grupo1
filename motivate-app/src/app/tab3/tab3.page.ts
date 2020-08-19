import { Component } from '@angular/core';
import {AuthService } from '../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 usuario:Object;  

  constructor(public authservice: AuthService, private router: Router) {

    this.details();
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

logout() {
  this.authservice.logout().subscribe(
      (res) => {
          console.log(res);
          localStorage.removeItem('userToken');
          localStorage.removeItem('Usuario');
          this.usuario= null; 
          this.router.navigate(['/tabs/home']).then(()=>window.location.reload());
          console.log("Você saiu!!");
      }
  );
}

GoToCreateChallenge(){
  this.router.navigate(['/cadastro-desafio']);
}

GoToCreateRecipe(){
  this.router.navigate(['/tabs/tab2']);
}

GoToEditProfile(){
  this.router.navigate(['edit-profile']);
}


}
