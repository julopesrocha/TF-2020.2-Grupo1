import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

    commentForm: FormGroup;
    recipe;
    recipeId;
    usuario: Object;


  constructor(private router: Router, public formbuilder:FormBuilder, public recipeService: RecipeService, public authservice: AuthService) {
      this.commentForm = this.formbuilder.group({
          comment:[null,[Validators.required,Validators.minLength(1),Validators.maxLength(200)]],
      });
     this.recipeId = this.router.getCurrentNavigation().extras;
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

  submitForm(commentForm){
      console.log(commentForm.value);
  }

  getRecipe(id){
    this.recipeService.showRecipe(id).subscribe(
     (res)=>{
       console.log(res);
       this.recipe = res.recipe;
     },
     (err)=>{
       console.log(err);
     }
   );
 }

   deleteRecipe(){
        this.recipeService.deleteRecipe(this.recipeId).subscribe(
          (res)=>{
            console.log(res);
            this.router.navigate(["/tabs/home"]);
          },(err) =>{
            console.log(err);
          }
        );
      }


  navigateTobackHome(){
      this.router.navigate(['/tabs/home'])
  }

  ngOnInit() {
      this.getRecipe(this.recipeId);
  }

}
