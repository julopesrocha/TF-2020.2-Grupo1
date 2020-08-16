import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

//    recipe;
//    recipeId;
// public recipeService:RecipeService
  constructor(private router: Router) {
    //  this.recipeId = this.router.getCurrentNavigation().extras;
  }

  //getRecipe(id){
//     this.recipeService.getRecipe(id).subscribe(
//      (res)=>{
//        console.log(res);
//        this.recipe = res.recipe;
//      },
//      (err)=>{
//        console.log(err);
//      }
//    );
//  }

//    deleteRecipe(){
//         this.recipeService.deleteRecipe(this.recipeeId).subscribe(
//           (res)=>{
//             console.log(res);
//             this.router.navigate(["/tabs/home]);
//           },(err) =>{
//             console.log(err);
//           }
//         );
//       }


  navigateTobackHome(){
      this.router.navigate(['/tabs/home'])
  }

  ngOnInit() {
//       this.getRecipe(this.recipeId);
  }

}
