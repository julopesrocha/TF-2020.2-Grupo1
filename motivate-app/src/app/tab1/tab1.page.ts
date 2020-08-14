import { Component } from '@angular/core';
import { ChallengeServiceService } from '../services/challenge-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private router: Router) {}

        navigateToLowCarb() {
            this.router.navigate(['/challenge-page']);
        }

        navigateTobackHome(){
            this.router.navigate(['/tabs/home'])
        }
}
