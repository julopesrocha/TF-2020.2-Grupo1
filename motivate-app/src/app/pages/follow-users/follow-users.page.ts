import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-follow-users',
  templateUrl: './follow-users.page.html',
  styleUrls: ['./follow-users.page.scss'],
})
export class FollowUsersPage implements OnInit {

  clickFollow: boolean = true;
  followers;
  following;

  constructor(private router: Router, public userservice:UserService ) { }

  GoBackHome(){
      this.router.navigate(['/tabs/home'])
  }

  GoToProfile(){
     this.router.navigate(['/tabs/tab3'])
  }


  alternar(){
      this.clickFollow = !this.clickFollow;
  }

//  listFollowers(){
//     this.userService.listFollowers().subscribe(
//       (res)=>{
//         console.log(res);
//         this.followers = res.followersList;
//       },
//       (err)=>{
//         console.log(err);
//       }
//     );
 // }

//   listFollowing(){
//      this.userService.listFollowing().subscribe(
//        (res)=>{
//          console.log(res);
//          this.following = res.followingList;
//        },
//        (err)=>{
//          console.log(err);
//        }
//      );
//    }

  ngOnInit() {}

}
