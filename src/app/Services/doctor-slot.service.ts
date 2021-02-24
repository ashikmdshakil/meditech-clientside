import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorSlot } from './../Model/DoctorSlot.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
