import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-follow-users',
  templateUrl: './follow-users.page.html',
  styleUrls: ['./follow-users.page.scss'],
})
export class FollowUsersPage implements OnInit {

  clickFollow: boolean = true;
  followers;
  followings;
  // followMode;
  // check;

  constructor(private router: Router, public userService:UserService, private route: ActivatedRoute ) { }

  // async followUser(){
  // await this.route.params.subscribe((params) => (this.userId = params.userId));
  //   this.userService.follow(this.userId).subscribe(
  //     (res)=>{
  //         console.log(res);
  //         this.followMode = res.isFollowing;
  //         if(this.followMode){
  //             this.user.followers ++;
  //         }
  //         else{
  //             this.user.followers --;
  //         }
  //     }
  //   )
  // }
  //
  // async checkFollow(){
  // await this.route.params.subscribe((params) => (this.userId = params.userId));
  //   this.userService.verifyFollow(this.userId).subscribe(
  //     (res)=>{
  //         console.log(res);
  //         this.followMode = res.isFollowing;
  //     }
  //   )
  // }


  GoBackHome(){
      this.router.navigate(['/tabs/home'])
  }

  GoToProfile(){
     this.router.navigate(['/tabs/tab3'])
  }


  // verifyPageFollow(){
  //     if(this.followers == "followers"){
  //         this.listFollowers();
  //     }
  //     else if(this.followings == "followings"){
  //         this.listFollowing();
  //     }

     listFollowers(){
        this.userService.listFollowers().subscribe(
          (res)=>{
            console.log(res);
            this.followers = res.userFollower;
          },
          (err)=>{
            console.log(err);
          }
        );
     }

     listFollowersUser(user_id){
        this.userService.listFollowersUser(user_id).subscribe(
          (res)=>{
            console.log(res);
            this.followers = res.userFollower;
          },
          (err)=>{
            console.log(err);
          }
        );
     }

     // GoToListFollowers(){
     //    this.router.navigate(['/follow-users'])
     // }


      listFollowing(){
         this.userService.listFollowing().subscribe(
           (res)=>{
             console.log(res);
             this.followings = res.userFollowing;
           },
           (err)=>{
             console.log(err);
           }
         );
       }

       listFollowingUser(user_id){
          this.userService.listFollowingUser(user_id).subscribe(
            (res)=>{
              console.log(res);
              this.followings = res.userFollowing;
            },
            (err)=>{
              console.log(err);
            }
          );
        }

      ngOnInit() {
          this.listFollowers();
          this.listFollowing();
          // this.checkFollow();
      }

    }
