import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

//    comments = [];

  constructor(public commentService: CommentService) { }

 //listComments(){
//     this.commentService.listComments().subscribe(
//       (res)=>{
//         console.log(res);
//         this.comments = res.challengeList;
//       },
//       (err)=>{
//         console.log(err);
//       }
//     );
//   }
//  deleteComment(id){
//    this.commentService.deleteComment(id).subscribe(
//      (res)=>{
//        console.log(res);
//        alert(res[0]);
//        this.listComments(this.recipe_id);
//      },(err) =>{
//        console.log(err);
//        alert(err.error[0]);
//      }
//    );
//  }

  ngOnInit() {
//      this.listComments();
  }

}
