import { environment } from './../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from '../Model/Appoinment.model';
const ipAdress = environment.ip;

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

 myAppoinments(mobileNumber: string): Observable<any>{
  let param = new HttpParams()
  .set('mobileNumber' , mobileNumber);
  //let user :any = JSON.parse(localStorage.getItem('currentUser'));
  const headers = new HttpHeaders({
    authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
});
    return this.http.get(ipAdress+'/myAppoinments',{headers: headers,params: param})
 }

}
