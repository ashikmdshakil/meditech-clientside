import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User.model';

@Injectable({
  providedIn: 'root'
})
export class UserTransferService {
  user: User = new User();
  http: HttpClient;
  constructor(http : HttpClient) {
    this.http = http;
   }

   getUser(mobileNumber: string){
    let param = new HttpParams()
    .set('number' , mobileNumber);
    let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
  this.http.get('http://10.0.0.3:8080/getUser',{headers: headers,params: param, responseType: 'text'}).subscribe(response =>{ 
    this.user = JSON.parse(response);
    console.log(response);
  })
   }
}
