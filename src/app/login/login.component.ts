import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

import { from, Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  number: string;
  password: string;
  alertExist: boolean = false;
  login: LoginService;
  router: Router;
  failureMessage: Error;
  message: string;

  constructor(login: LoginService, router: Router) {
      this.login = login;
      this.router = router;
   }

  authenticate(){
   let token = this.login.login(this.number,this.password).pipe(
      retry(1),
      catchError(this.handleError)
    );
    token.subscribe(
      result=>{
        let user :any = result['principal'];
        let authorities: any = user.authorities;
        /* localStorage.setItem('username',user.username);
        localStorage.setItem('password',user.password);
        localStorage.setItem('role',user.authorities[0].authority) */

        /* this.router.navigateByUrl('/home/(nav:refresh)').then(()=>{
          this.router.navigateByUrl('/home');
        }) */
        if(user.authorities[0].authority === 'admin'){
          localStorage.setItem('username',user.username);
          localStorage.setItem('password',this.password);
          localStorage.setItem('role',user.authorities[0].authority);
          this.router.navigateByUrl('/super-admin-pannel');
        }
        else{
          this.message = "Sorry ! You are not an Admin.";
        }
      },
      error =>{
        this.failureMessage = error;
        this.alertExist =true;
        this.message = "Sorry ! Something went wrong !";
      }
    )
   }

   handleError(error : HttpErrorResponse){
     this.alertExist = true;
    return throwError(
      'Credentials you have given is wrong !');
   }

   close(){
     this.alertExist = false;
     this.failureMessage = null;
   }
   
  ngOnInit(): void {

  }
  

}
