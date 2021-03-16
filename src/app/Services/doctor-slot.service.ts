import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DoctorSlot } from './../Model/DoctorSlot.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamber } from '../Model/Chamber.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorSlotService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

  updateDoctorSlots(doctorSlot: DoctorSlot): Observable<any>{
    //console.log('chamber name is '+chamber.name);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://10.0.0.3:8080/updateDoctorSlots',doctorSlot,{headers: headers,'responseType': 'text'});
   }

   getSlots(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);
    let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://10.0.0.3:8080/getSlots',{headers: headers,params: param})
   }

   getPatientList(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://10.0.0.3:8080/getPatientList',{headers: headers,params: param})
   }

   deleteSlot(doctorSlot: DoctorSlot): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://10.0.0.3:8080/deleteSlot',doctorSlot,{headers: headers,'responseType': 'text'});
   }

   searchSlotsByDate(date, chamberId): Observable<any>{
    let param = new HttpParams()
    .set('date' , date)
    .set('chamberId', chamberId);
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://10.0.0.3:8080/slotsByDate',{headers: headers,params: param})
   }

   
    

}
