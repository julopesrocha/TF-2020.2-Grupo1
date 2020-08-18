import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import {RecipeService} from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

    user_id;
    comments;
    commentId;
    recipe;
    recipeId;
    commentForm: FormGroup;

  constructor(private router: Router, public formbuilder:FormBuilder,
  public recipeService: RecipeService, public commentService: CommentService, public authService: AuthService) {

      this.details();
      this.recipeId = this.router.getCurrentNavigation().extras;
      this.commentForm = this.formbuilder.group({
          comment:[null,[Validators.required,Validators.minLength(2),Validators.maxLength(200)]],
      });

  }

  details() {
    this.authService.showMyDetails().subscribe(
        (res) => {
            console.log(res);
            console.log("Esse é você");
            this.user_id = res[0].id;
        },
        (err) =>{
          console.log(err);
        }
    );
    }

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
          this.listComments();
      }

    }
