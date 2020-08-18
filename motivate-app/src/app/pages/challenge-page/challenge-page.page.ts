import { Component, OnInit } from '@angular/core';
import { ChallengeServiceService } from '../../services/challenge-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.page.html',
  styleUrls: ['./challenge-page.page.scss'],
})
export class ChallengePagePage implements OnInit {

    challenge;
    challengeId;

  constructor(private router: Router, public challengeServiceService:ChallengeServiceService) {

      this.challengeId = this.router.getCurrentNavigation().extras;
  }

  getChallenge(id){
     this.challengeServiceService.getChallenge(id).subscribe(
      (res)=>{
        console.log(res);
        this.challenge = res.challenge;

      },
      (err)=>{
        console.log(err);
      }
    );
 }



  GoTochallengeList() {
      this.router.navigate(['/tabs/tabs1']);
  }

  GoTobackHome(){
      this.router.navigate(['/tabs/home'])
  }

  ngOnInit() {
      this.getChallenge(this.challengeId);
  };


}
