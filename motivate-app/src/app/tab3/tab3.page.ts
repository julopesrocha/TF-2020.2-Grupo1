import { Component } from '@angular/core';
import {AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 userId;
 recipes;
 usuario:Object;

  constructor(public authservice: AuthService, private router: Router, public userService: UserService ) {

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

listRecipes(user_id){
  this.userService.listRecipesUser(user_id).subscribe(
    (res)=>{
      console.log(res);
      this.recipes=res.recipeList;
    },
    (err)=>{
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

navigateToRecipe(recipe_id) {
  this.router.navigate(['/recipe'], recipe_id);
}

ngOnInit(){
    this.listRecipes(this.userId);
}

}
