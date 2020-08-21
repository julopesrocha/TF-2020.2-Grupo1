import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

     user_id;
     recipes;
     usuario:Object;
     photo: SafeResourceUrl;
     editMode:boolean = false;
     updateProfileForm: FormGroup;

constructor(public authservice: AuthService, private router: Router, public userservice: UserService,
public formbuilder:FormBuilder, public recipeService: RecipeService, public alertController:AlertController, public sanitizer:DomSanitizer) {

this.details();

this.updateProfileForm = this.formbuilder.group(
  {
    name:[null, [Validators.maxLength(20), Validators.minLength(2)]],
    gender:[[Validators.required]],
    aboutme:[null],
    photo:[null]

      }
    )
  }

  async takePicture(){
    const photo = await
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo =
    this.sanitizer.bypassSecurityTrustResourceUrl
    (photo && (photo.dataUrl));
  }

  async deleteAccountAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cuidado!',
      message: 'Você realmente deseja excluir sua conta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (Nao) => {
          }
        }, {
          text: 'Confirmar',
          handler: (Sim) => {
            console.log('Conta excluída com sucesso.');
            this.deleteUser();
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
        if(this.photo) {
            form.value.photo = this.photo['changingThisBreaksApplicationSecurity'];
        }
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

    deleteUser(){
      this.userservice.deleteUser().subscribe(
        (res)=>{
          console.log(res);
          localStorage.removeItem('userToken');
          this.router.navigate(["/tabs/home"]).then(()=>window.location.reload());
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
