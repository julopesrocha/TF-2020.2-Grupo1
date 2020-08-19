import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {RecipeService} from '../../services/recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-other',
  templateUrl: './profile-other.page.html',
  styleUrls: ['./profile-other.page.scss'],
})
export class ProfileOtherPage implements OnInit {

  user;
  followMode=false;

  constructor(private router: Router, public userService: UserService, public recipeService: RecipeService) { }

  Follow(){ 
    this.followMode = true;
  }

  Unfollow(){
    this.followMode = false;
  }


  // followUser(){
  //   this.userServive.followUser().subscribe(
  //     (res)=>{
  //       console.log("seguindo otário");
  //       this.followMode =true;
  //     }
  //   )
  // }


// SHOW USER

//   getUser(id){
//     this.userService.showUser(id).subscribe(
//      (res)=>{
//        console.log(res);
//        this.user = res.user;
//      },
//      (err)=>{
//        console.log(err);
//      }
//    );
//  }

GoToHome(){
  this.router.navigate(['/tabs/home']);
}

  ngOnInit() {
  }

}
