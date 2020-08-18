import { Component, OnInit } from '@angular/core';
import { ChallengeServiceService } from '../../services/challenge-service.service';
import { Router } from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-home-deslog',
  templateUrl: './home-deslog.page.html',
  styleUrls: ['./home-deslog.page.scss'],
})
export class HomeDeslogPage implements OnInit {

    challenge;
    challengeId;
    recipes;

  constructor(private router: Router, public challengeServiceService:ChallengeServiceService, public recipeService: RecipeService) {
      this.challengeId = this.router.getCurrentNavigation().extras;
  
 
 }

  getChallenge(id){
     this.challengeServiceService.getChallenge(id).subscribe(
      (res)=>{
        console.log(res);
        this.challenge = res.challenge;

      },
      (err)=>{
        console.log(err);
      }
    );
  }

  listRecipes(){
    this.recipeService.listRecipesHome().subscribe(
      (res)=>{
        console.log(res);
        this.recipes=res.recipeList;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  
  ngOnInit() {
    
  }


  GoToRecipe(){
      this.router.navigate(['/recipe'])
  }

   navigateToRecipe(recipe_id) {
    this.router.navigate(['/recipe'], recipe_id);
  }

  GoToRegister(){
    this.router.navigate(['/cadastro-usuario']);
  }

  GoToLogin(){
    this.router.navigate(['/login']);
  }

  ionViewWillEnter(){
    console.log("gabi fez a receita");
    this.listRecipes();
  }

}
