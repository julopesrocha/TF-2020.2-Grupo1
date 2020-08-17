import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile-other',
  templateUrl: './profile-other.page.html',
  styleUrls: ['./profile-other.page.scss'],
})
export class ProfileOtherPage implements OnInit {

  user;

  constructor(public userService: UserService) { }

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

  ngOnInit() {
  }

}
