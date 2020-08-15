import { Component, OnInit } from '@angular/core';
import { ChallengeServiceService } from '../../services/challenge-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.page.html',
  styleUrls: ['./challenge-page.page.scss'],
})
export class ChallengePagePage implements OnInit {

  constructor(private router: Router) {}

  navigateTochallengeList() {
      this.router.navigate(['/tabs/tabs1']);
  }

  navigateTobackHome(){
      this.router.navigate(['/tabs/home'])
  }

  ngOnInit() {};


}
