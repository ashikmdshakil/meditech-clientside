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
  failureMessage: Error;

  constructor(login: LoginService) {
      this.login = login;
   }

  authenticate(){
   let token = this.login.login(this.number,this.password).pipe(
      retry(1),
      catchError(this.handleError)
    );
    token.subscribe(
      result=>{
        let user :any = result['principal'];
        localStorage.setItem('username',user.username);
        localStorage.setItem('password',user.password);
        console.log(' ' +localStorage.getItem('username')+ ' ' + localStorage.getItem('password')); 
      },
      error =>{
        this.failureMessage = error;
        this.alertExist =true;
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
