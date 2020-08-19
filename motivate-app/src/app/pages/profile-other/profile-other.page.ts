import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {RecipeService} from '../../services/recipe.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-other',
  templateUrl: './profile-other.page.html',
  styleUrls: ['./profile-other.page.scss'],
})
export class ProfileOtherPage implements OnInit {

    check;
    userId;
    user;
    followMode;

  constructor(private router: Router, public userService: UserService, public recipeService: RecipeService, private route: ActivatedRoute) { }

   followUser(){
     this.userService.follow(this.userId).subscribe(
       (res)=>{
           console.log(res);
           this.followMode = res.isFollowing;
           if(this.followMode){
               this.user.followers ++;
           }
           else{
               this.user.followers --;
           }
       }
     )
   }

   checkFollow(){
     this.userService.verifyFollow(this.userId).subscribe(
       (res)=>{
           console.log(res);
           this.followMode = res.isFollowing;
       }
     )
   }

  getUser(id){
    this.userService.showUser(id).subscribe(
     (res)=>{
       console.log(res);
       this.user = res.user;
     },
     (err)=>{
       console.log(err);
     }
   );
 }

GoToHome(){
  this.router.navigate(['/tabs/home']);
}

  ngOnInit() {
      this.userId = this.route.snapshot.paramMap.get("id");
      this.checkFollow();
      this.getUser(this.userId);
  }

}
