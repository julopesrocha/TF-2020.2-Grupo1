import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  usuario:Object; 

  constructor(public authservice: AuthService, public userService: UserService) { 
    this.details();
  }

  
  details() {
    this.authservice.showMyDetails().subscribe(
        (res) => {
            console.log(res);
            console.log("Esse é você");
            this.usuario = res[0];
        },
        (err) =>{
          console.log(err);
        }
    );

}

// deleteUser(id){
//   this.userService.deleteUser(id).subscribe(
//     (res)=>{
//       console.log(res);
//       console.log('usuário deletado.' +id);
//     }, (err) =>{
//       console.log(err);
//     }
//   );
  
// }

  ngOnInit() {
  }

}
