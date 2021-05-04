import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User.model';
const ip = "http://139.162.19.50:8080";
@Injectable({
  providedIn: 'root'
})
export class UserTransferService {
  user: any; 
  http: HttpClient;
  constructor(http : HttpClient) {
    this.http = http;
   }

   getUserByNumber(mobileNumber: string){
     console.log("Mobile number is "+mobileNumber);
    let param = new HttpParams()
    .set('number' , mobileNumber);
    let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
  this.http.get(ip+'/getUser',{headers: headers,params: param, responseType: 'text'}).subscribe(response =>{ 
    this.user = JSON.parse(response);
    console.log(this.user.name);
  })
   }
}
