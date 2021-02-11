import { UsersService } from './../Services/users.service';
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
  userService: UsersService;

  constructor(router: ActivatedRoute, userService: UsersService) {
    this.router = router;
    this.userService = userService;
   }

  ngOnInit(): void {
    this.router.params.subscribe(param =>{
      this.tokenString = param.name;
      console.log(this.tokenString);
    });
  }

  reset(){
    if(this.password1 == this.password2){
      this.userService.setPassword(this.tokenString, this.password1).subscribe(response =>{
        console.log(response);
      })
    }
    else{
      console.log("password does not match .");
    }
  }
}
