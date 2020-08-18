import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-users',
  templateUrl: './follow-users.page.html',
  styleUrls: ['./follow-users.page.scss'],
})
export class FollowUsersPage implements OnInit {
  follow: string;
  clicarSeguir= true;
  clicarSeguindo = true;

  constructor(private router: Router) { }

  GoTobackHome(){
      this.router.navigate(['/tabs/home'])
  }

  GoToProfile(){
     this.router.navigate(['/tabs/tabs3'])
  }


  ngOnInit() {}
}
