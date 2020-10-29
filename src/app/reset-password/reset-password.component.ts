import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password1: string;
  password2: string;
  router: ActivatedRoute;
  tokenString: string;

  constructor(router: ActivatedRoute) {
    this.router = router;
   }

  ngOnInit(): void {
    this.router.params.subscribe(param =>{
      this.tokenString = param.name;
      console.log(this.tokenString);
    });
  }

  reset(){

  }

}
