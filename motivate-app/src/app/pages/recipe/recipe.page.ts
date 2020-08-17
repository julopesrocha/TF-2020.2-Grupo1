import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

    commentForm: FormGroup;

  constructor(private router: Router, public formbuilder:FormBuilder, public commentService: CommentService) {
      this.commentForm = this.formbuilder.group({
          comment:[null,[Validators.required,Validators.minLength(2),Validators.maxLength(200)]],
      });
  }

//basicamente copiei do codigo da aula do vini

//postComment(form){
//    console.log(form);
//    console.log(form.value);
//    this.commentService.createComment(form.value).subscribe(
//      (res)=>{
//        console.log(res);
//        this.commentForm.reset();
//        this.listComments(this.republic_id);
//      },
//      (err)=>{
//        console.log(err);
//      }
//    );
//  }


  submitForm(commentForm){
      console.log(commentForm.value);
  }


  navigateTobackHome(){
      this.router.navigate(['/tabs/home'])
  }

  ngOnInit() {
  }

}
