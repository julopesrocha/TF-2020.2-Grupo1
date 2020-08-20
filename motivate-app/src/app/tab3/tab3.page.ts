import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

     user_id;
     recipes;
     usuario:Object;
     editMode:boolean = false;
     updateProfileForm: FormGroup;


  constructor(public alertController:AlertController, public authservice: AuthService, private router: Router, public userservice: UserService, public recipeService: RecipeService, public formbuilder:FormBuilder) {

this.updateProfileForm = this.formbuilder.group(
  {
    name:[null, [Validators.maxLength(20), Validators.minLength(2)]],
    gender:[[Validators.required]],
    aboutme:[null]

      }
    )
  }

  // Alert

  async deleteAccountAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Você  deseja excluir sua conta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (Nao) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: (Sim) => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  details() {
      console.log("details");
      this.authservice.showMyDetails().subscribe(
        (res) => {
            console.log(res);
            console.log("Perfil -", res[0].name);
            this.usuario = res[0];
            this.user_id = res[0].id;
            this.listRecipes(this.user_id);
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
      console.log(user_id);
      this.recipeService.listRecipesUser(user_id).subscribe(
        (res)=>{
          console.log(res);
          this.recipes=res.recipeList;
        },
        (err)=>{
              console.log(err);
        }
      );
    }


    toggleNoEdit(){
      this.editMode = false;
    }

    toggleEdit(){
      this.editMode = true;
    }


    updateUser(form){
      this.userservice.updateUser(form.value).subscribe(
        (res)=>{
          this.editMode = false;
          console.log(res);
          this.router.navigate(["/tabs/tab3"]).then(()=>window.location.reload());
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

    GoToProfile(){
      this.router.navigate(['/tabs/tab3']);
    }

    navigateToRecipe(recipe_id) {
      this.router.navigate(['/recipe'], recipe_id);
    }

    GoToFollowList(){
        this.router.navigate(['/follow-users']);
    }

    ngOnInit(){
        this.details();
    }

    }
