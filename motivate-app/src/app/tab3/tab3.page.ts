import { Component } from '@angular/core';
import {AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { DSAKeyPairKeyObjectOptions } from 'crypto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 usuario:Object;  

  constructor(public authservice: AuthService, private router: Router) {

    this.details();
  }

  details() {
    this.authservice.showMyDetails().subscribe(
        (res) => {
            console.log(res);
            console.log("Esse é você");
            this.usuario = res;
        },
        (err) =>{
          console.log(err);
        }
    );

}




}
