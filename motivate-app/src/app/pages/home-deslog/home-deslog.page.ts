import { Component, OnInit } from '@angular/core';
import { ChallengeServiceService } from '../../services/challenge-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-deslog',
  templateUrl: './home-deslog.page.html',
  styleUrls: ['./home-deslog.page.scss'],
})
export class HomeDeslogPage implements OnInit {

    challenge;
    challengeId;
    usuario: Object;

  constructor(private router: Router, public challengeServiceService:ChallengeServiceService, public authservice: AuthService) {

      this.challengeId = this.router.getCurrentNavigation().extras;
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

  userToken(){
      if (this.userToken && this.userToken != undefined && this.userToken != null) {}
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
  GoToRegister(){
    this.router.navigate(['/cadastro-usuario']);
  }

  GoToLogin(){
    this.router.navigate(['/login']);
  }
}
