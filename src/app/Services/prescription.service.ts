import { User } from './../User.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const ipAdress = "http://10.0.0.3:8080";
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

   getUserPrescriptions(appoinmentId: number, userId: number): Observable<any>{
    let param = new HttpParams()
    .set('appoinmentId',appoinmentId.toString())
    .set('userId', userId.toString());
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getFullPrescription',{headers: headers,params: param})
   }

}
