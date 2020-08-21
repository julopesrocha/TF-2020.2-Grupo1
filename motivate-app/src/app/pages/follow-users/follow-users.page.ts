import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-follow-users',
  templateUrl: './follow-users.page.html',
  styleUrls: ['./follow-users.page.scss'],
})
export class FollowUsersPage implements OnInit {

  photo: SafeResourceUrl;
  followers;
  followings;

  constructor(private router: Router, public userService:UserService, private route: ActivatedRoute, public sanitizer:DomSanitizer ) { }


  GoBackHome(){
      this.router.navigate(['/tabs/home'])
  }

  GoToProfile(){
     this.router.navigate(['/tabs/tab3'])
  }

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
