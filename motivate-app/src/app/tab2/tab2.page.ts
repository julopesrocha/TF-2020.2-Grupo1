import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  recipeForm: FormGroup;
  photo: SafeResourceUrl;
  editMode = false;

  challenge = JSON.parse(localStorage.getItem('challenge'));
  challenge_id = this.challenge.id;

  recipes = [];

  constructor(public formbuilder: FormBuilder, private router: Router, private sanitizer:DomSanitizer, public recipeService: RecipeService) {
  this.recipeForm = this.formbuilder.group({
    title:[null, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
    challenge:[null, [Validators.required]],
    subtitle:[null],
    ingredients:[null, [Validators.required, Validators.maxLength(500), Validators.minLength(3)]],
    preparation_mode: [null, [Validators.required, Validators.maxLength(600), Validators.minLength(3)]]
    

  }
    
  );
 }

 onSubmit(form){
   console.log(form.value);
 }

 

ngOnInit() {
}

async takePicture(){
  const image = await
  Plugins.Camera.getPhoto({
    quality: 100,
    allowEditing: true,
    saveToGallery: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera
  });
  this.photo =
  this.sanitizer.bypassSecurityTrustResourceUrl
  (image && (image.dataUrl));
}

GoToHome(){
  this.router.navigate(['/tabs/home']);
}

// createRecipe(form, challenge_id){
//   console.log(form);
//   console.log(form.value);
//   // this.editMode = false;
//   let body = form.value;
//   body.challenge_id= this.challenge_id;
//   body.username = localStorage.getItem('username');
//   this.recipeService.createRecipe(challenge_id, body).subscribe(
//   (res) => {console.log(res);
//     this.listRecipes(this.challenge_id);
//     this.recipeForm.reset();
    
//   }, (err) => {console.log(err); }
//   )
// }

// //Lista as receitas relacionadas a um desafio especifico.

// listRecipesChallenge(challenge_id){
//   this.recipeService.showRecipe(challenge_id).subscribe(
//     (res) => {
//       console.log(res);
//       this.recipes=res.recipes;
//     }, (err)=> {
//       console.log(err);
//     }
//   );
// }

// //Lista as receitas independente do desafio (home)

// // listRecipes(){
// //   this.recipeService.showRecipe().subscribe(
// //     (res) => {
// //       console.log(res);
// //       this.recipes=res.recipes;
// //     }, (err)=> {
// //       console.log(err);
// //     }
// //   );
// // }

// //exclui receita específica.
// deleteRecipe(id){
//   this.recipeService.deleteRecipe(id).subscribe(
//     (res)=>{
//       console.log(res);
//       console.log('Mais que cancelado:' +id);
//       this.listRecipes(this.challenge_id);
//     }, (err) =>{
//       console.log(err);
//     }
//   );
  
// }


}

