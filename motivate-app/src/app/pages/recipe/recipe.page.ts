import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import {RecipeService} from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
import { ChallengeServiceService } from '../../services/challenge-service.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

    user_id; 
    recipe_user_id; 
    recipe_user_name;
   

    comments;
    commentId;
    recipe;
    recipes;
    recipeId;

    challenges = [];

    editMode:boolean = false;

    commentForm: FormGroup; 
    updateForm: FormGroup; 

  constructor(private router: Router, public formbuilder:FormBuilder,
  public recipeService: RecipeService, public commentService: CommentService, public authService: AuthService, public challengeServiceService: ChallengeServiceService) {

      this.details();
      
      this.recipeId = this.router.getCurrentNavigation().extras;
      this.commentForm = this.formbuilder.group({
          comment:[null,[Validators.required,Validators.minLength(2),Validators.maxLength(200)]],
      });

     
      this.updateForm = this.formbuilder.group(
        {
          title:[null, [Validators.maxLength(30), Validators.minLength(3)]],
          challenge:[null],
          subtitle:[null],
          ingredients:[null, [Validators.maxLength(500), Validators.minLength(3)]],
          preparation: [null, [ Validators.maxLength(600), Validators.minLength(3)]]
          
        }
      )
      //

  }

  details() {
    this.authService.showMyDetails().subscribe(
        (res) => {
            console.log(res);
            this.user_id = res[0].id;
        },
        (err) =>{
          console.log(err);
        }
    );
    }

      // Funções do Comentário

  listComments(){
     this.commentService.listComments(this.recipeId).subscribe(
       (res)=>{
         console.log(res);
         this.comments = res.commentList;
       },
       (err)=>{
         console.log(err);
       }
     );
   }

    postComment(form){
        console.log(form);
        console.log(form.value);
        this.commentService.postComment(form.value, this.recipeId).subscribe(
          (res)=>{
            console.log(res);
           this.commentForm.reset();
           this.listComments();
         },
         (err)=>{
           console.log(err);
         }
       );
     }

     deleteComment(id, index){
       this.commentService.deleteComment(id).subscribe(
         (res)=>{
           console.log(res);
           this.comments.pop(index);
         },(err) =>{
           console.log(err);
         }
       );
     }

     // Funções da Receita

      getRecipe(id){
        this.recipeService.showRecipe(id).subscribe(
         (res)=>{
           console.log(res);
           this.recipe = res.recipe;
           this.recipe_user_id = res.recipe.user_id; 
           this.recipe_user_name=res.recipe.user_name;
           console.log(res.recipe.title);
           console.log("Postada por ", res.recipe.user_name);
           console.log(this.recipe);
           
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
    

 
     toggleEdit(){
       this.editMode = true;
     }
     toggleNoEdit(){
       this.editMode = false;
     }

     updateRecipe(form){
       this.recipeService.updateRecipe(this.recipeId, form.value).subscribe(
         (res)=>{
           this.editMode = false;
           console.log(res);
           console.log("Recita editada com sucesso!");
           this.listRecipes();
           this.router.navigate(["/tabs/home"]);
           this.listRecipes();
         }, (err) => {
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

          // funções do challenge

          listChallenges(){
            this.challengeServiceService.getListChallenges().subscribe(
              (res)=>{
                console.log(res);
                this.challenges = res.challengeList;
              },
              (err)=>{
                console.log(err);
              }
            );
          }

      navigateTobackHome(){
          this.router.navigate(['/tabs/home'])
      }

      GoToRecipe(){
        this.router.navigate(['/tabs/home']);
    }

      ngOnInit() {
          this.getRecipe(this.recipeId);
          this.listComments();
          this.listChallenges();
      }

    }
