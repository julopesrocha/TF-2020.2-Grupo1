import { Component, OnInit } from '@angular/core';
import { ChallengeServiceService } from '../../services/challenge-service.service';
import { Router } from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.page.html',
  styleUrls: ['./challenge-page.page.scss'],
})
export class ChallengePagePage implements OnInit {

    challenge;
    challengeId;
    recipes;

  constructor(public recipeService: RecipeService, private router: Router, public challengeServiceService:ChallengeServiceService) {
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

 listRecipes(challenge_id){
  this.recipeService.listRecipesChallenge(challenge_id).subscribe(
    (res)=>{
      console.log(res);
      this.recipes= res.recipeList;
    },
    (err)=>{
      console.log(err);
    }
  );
}



  navigateToRecipe(recipe_id) {
    this.router.navigate(['/tabs/recipe'], recipe_id);
  }

  navigateTochallengeList() {
      this.router.navigate(['/tabs/tabs1']);
  }

  navigateTobackHome(){
      this.router.navigate(['/tabs/home'])
  }

  ngOnInit() {
      this.getChallenge(this.challengeId);
      this.listRecipes(this.challengeId);
  };


}
