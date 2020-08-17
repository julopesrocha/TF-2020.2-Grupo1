import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  constructor(private router: Router, public formbuilder:FormBuilder, public recipeService: RecipeService) {
      this.commentForm = this.formbuilder.group({
          comment:[null,[Validators.required,Validators.minLength(1),Validators.maxLength(200)]],
      });
     this.recipeId = this.router.getCurrentNavigation().extras;
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
