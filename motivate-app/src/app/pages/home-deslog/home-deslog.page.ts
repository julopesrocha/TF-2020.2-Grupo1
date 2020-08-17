import { Component, OnInit } from '@angular/core';
import { ChallengeServiceService } from '../../services/challenge-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-deslog',
  templateUrl: './home-deslog.page.html',
  styleUrls: ['./home-deslog.page.scss'],
})
export class HomeDeslogPage implements OnInit {

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

  ngOnInit() {}


  GoToRecipe(){
      this.router.navigate(['/recipe'])
  }

<<<<<<< HEAD

=======
  GoToRegister(){
    this.router.navigate(['/cadastro-usuario']);
  }

  GoToLogin(){
    this.router.navigate(['/login']);
  }

>>>>>>> d01de1a18f560fd70771bb8e6e1f708b10e5c773
}
