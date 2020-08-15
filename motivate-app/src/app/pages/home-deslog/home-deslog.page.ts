import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-deslog',
  templateUrl: './home-deslog.page.html',
  styleUrls: ['./home-deslog.page.scss'],
})
export class HomeDeslogPage implements OnInit {


  constructor(private router: Router) {}

  ngOnInit() {}

  VaiproCadastro(){
    this.router.navigate(['/cadastro-usuario']);
  }

  VaiproLogin(){
    this.router.navigate(['/login']);
  }

}
