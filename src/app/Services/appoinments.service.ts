import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from '../Model/Appoinment.model';
const ipAdress = "http://182.48.90.214:8080";

@Injectable({
  providedIn: 'root'
})
export class AppoinmentsService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
   }

  takeAppoinment(appoinment: Appoinment): Observable<string>{
    //user.userAvatar = null;
   const headers = new HttpHeaders({
     authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
 });
   //console.log(user.addressBooks.city);
   return this.http.post(ipAdress+'/takeAppoinment',appoinment,{headers: headers,'responseType': 'text'});
 }

}
