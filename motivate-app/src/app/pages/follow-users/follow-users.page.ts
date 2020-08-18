import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-users',
  templateUrl: './follow-users.page.html',
  styleUrls: ['./follow-users.page.scss'],
})
export class FollowUsersPage implements OnInit {

  clickFollow: boolean = true;
  Follow: string;

  constructor(private router: Router) { }

  GoTobackHome(){
      this.router.navigate(['/tabs/home'])
  }

  GoToProfile(){
     this.router.navigate(['/tabs/tabs3'])
  }


  alternar(){
      this.clickFollow = !this.clickFollow;
  }

  ngOnInit() {}
  
}
