import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-users',
  templateUrl: './follow-users.page.html',
  styleUrls: ['./follow-users.page.scss'],
})
export class FollowUsersPage implements OnInit {
  follow: string;
  clicarSeguir= true;
  clicarSeguindo = true;

  constructor() { }


  ngOnInit() {}
}
