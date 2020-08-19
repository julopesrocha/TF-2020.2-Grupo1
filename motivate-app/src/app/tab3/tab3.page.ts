import { Component } from '@angular/core';
import {AuthService } from '../services/auth.service';
import {UserService } from '../services/user.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 usuario:Object;
 
 editMode:boolean = false;

 updateProfileForm: FormGroup; 

  constructor(public authservice: AuthService, private router: Router, public userservice: UserService, public formbuilder:FormBuilder) {

    this.details();

    this.updateProfileForm = this.formbuilder.group(
      {
        name:[[Validators.maxLength(20), Validators.minLength(2)]],
        gender:[ [Validators.required]],
        aboutme:[null]
          
      }
    )
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

toggleEdit(){
  this.editMode = true;
}

updateUser(form){
  this.userservice.updateUser(form.value).subscribe(
    (res)=>{
      this.editMode = false;
      console.log(res);
      this.router.navigate(["/tabs/home"]);
    }, (err) => {
      console.log(err);
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
