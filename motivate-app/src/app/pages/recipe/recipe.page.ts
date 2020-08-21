import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
import { ChallengeServiceService } from '../../services/challenge-service.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

    token = localStorage.getItem("userToken");


    oi = true;
    usuario;
    user_id;
    recipe_user_id;
    recipe_user_name;


    comments;
    commentId;
    recipe;
    recipes;
    recipeId;
    likeMode:boolean = false;

    challenges = [];

    editMode:boolean = false;

    commentForm: FormGroup;
    updateForm: FormGroup;

  constructor(
      private router: Router,
      public formbuilder:FormBuilder,
      public recipeService: RecipeService,
      public commentService: CommentService,
      public authService: AuthService,
      public challengeServiceService: ChallengeServiceService,
      public alertController: AlertController,
      public toastController: ToastController) {



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
  }
//Lista de toasts
    async receitaApagadaToast(){
       const toast = await this.toastController.create({
         message: 'Receita deletada com sucesso!',
         duration: 3000
       });
       toast.present();
       toast.onDidDismiss().then(() => {
         this.router.navigate(["/tabs/home"]).then(()=>window.location.reload());
       });
     }

     async receitaEditadaToast(){
       const toast = await this.toastController.create({
         message: 'Receita editada com sucesso!',
         duration: 3000
       });
       toast.present();
       toast.onDidDismiss().then(() => {
         this.router.navigate(["/tabs/home"]).then(()=>window.location.reload());
         this.editMode = false;
       });
     }

     async comentarioEnviadoToast(){
       const toast = await this.toastController.create({
         message: 'Comentário enviado! :D',
         duration: 6000
       });
       toast.present();
     }

     async comentarioApagadoToast(){
       const toast = await this.toastController.create({
         message: 'Comentário apagado!',
         duration: 6000
       });
       toast.present();
     }
//Lista de alerts

  async deleteCommentAlertConfirm(id, index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cuidado!',
      message: 'Você realmente deseja excluir esse comentário?',
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
            console.log('Comentário excluído.');
            this.deleteComment(id, index);
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteRecipeAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cuidado!',
      message: 'Você realmente deseja excluir essa receita?',
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
            console.log('Receita excluída.');
            this.deleteRecipe();
          }
        }
      ]
    });

    await alert.present();
    }

  details() {
    this.authService.showMyDetails().subscribe(
        (res) => {
            console.log(res);
            this.user_id = res[0].id;
            this.usuario = res[0];
        },
        (err) =>{
          console.log(err);
        }
    );
    }

// Função de like

    likeRecipe(){
        this.recipeService.like(this.recipeId).subscribe(
            (res)=>{
                console.log(res);
                this.likeMode = res.hasLiked;
                if(this.likeMode){
                    this.recipe.likes ++;
                }
                else{
                    this.recipe.likes --;
                }
            }
        )
    }

      checkLike(){
          this.recipeService.verifyLike(this.recipeId).subscribe(
              (res)=>{
                  console.log(res);
                  this.likeMode = res.hasLiked;
              }
          )
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
           this.comentarioEnviadoToast();
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
           this.comentarioApagadoToast();
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
           this.receitaEditadaToast();
         }, (err) => {
           console.log(err);
         }
       );
     }

       deleteRecipe(){
            this.recipeService.deleteRecipe(this.recipeId).subscribe(
              (res)=>{
                console.log(res);
                this.receitaApagadaToast();
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
          this.router.navigate(['/tabs/home']).then(()=>window.location.reload());
      }

      GoToRecipe(){
        this.router.navigate(['/tabs/home']);
    }

      ngOnInit() {
          this.getRecipe(this.recipeId);
          this.listComments();
          this.listChallenges();
          if(localStorage.getItem('userToken')){
              this.checkLike();
              this.details();
          }
      }

    }
