import { Component } from '@angular/core';
import { ChallengeServiceService } from '../services/challenge-service.service';
import { Router } from '@angular/router';
import {AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public authservice: AuthService, private router: Router) {}

  logout() {
    this.authservice.logout().subscribe(
        (res) => {
            console.log(res);
            localStorage.removeItem('userToken');
            localStorage.removeItem('Usuario');

            this.router.navigate(['/tabs/home']);
            console.log("Você saiu!!");
        }
    );
}

        navigateToLowCarb() {
            this.router.navigate(['/challenge-page']);
        }

        navigateTobackHome(){
            this.router.navigate(['/tabs/home'])
        }
}
