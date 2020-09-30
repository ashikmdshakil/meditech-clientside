import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user: User;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.user = new User;
   }
  registerUser(name: string, email: string, number: string, password: string){
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    console.log(""+this.user.email);
    this.http.post('http://10.0.0.3:8080/signup',this.user,{'responseType': 'text'}).subscribe((response)=>{
      console.log(response.toString());
    })
  }
}
