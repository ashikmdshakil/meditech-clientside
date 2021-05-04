import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const ipAdress = "http://139.162.19.50:8080";
@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  http: HttpClient

  constructor(http: HttpClient) {
    this.http = http;
   }

   getMedicineList(): Observable<any>{
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/medicineList',{headers: headers});
   }
}
