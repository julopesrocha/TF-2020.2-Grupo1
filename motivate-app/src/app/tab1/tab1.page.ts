import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService } from '../services/auth.service';
import { ChallengeServiceService } from '../services/challenge-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    challenges = [];

  constructor(public authservice: AuthService, private router: Router, public challengeServiceService: ChallengeServiceService,) {

  }

  listChallenges(){
     this.challengeServiceService.getListChallenges().subscribe(
       (res)=>{
         console.log(res);
         this.challenges = res.challengeList;
       },
       (err)=>{
         console.log(err);
       }
     );
   }

    navigateToLowCarb(id) {
        this.router.navigate(['/challenge-page'], id);
    }

    navigateTobackHome(){
        this.router.navigate(['/tabs/home'])
    }

    ngOnInit(){
        this.listChallenges();
    }

}
