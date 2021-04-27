import { Commision } from './../Model/Commision.model';
import { Advertisement } from './../Model/Advertisement.model';
import { Appoinment } from './../Model/Appoinment.model';
import { User } from './../User.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../Model/Categories.model';
import { AdvertisementCategory } from '../Model/AdvertisementCategory.model';
const ipAddress = "http://10.0.0.3:8080";
@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
   }

  totalPatients(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsTotalPatients',{headers: headers})
   }

   totalDoctors(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsTotalDoctors',{headers: headers})
   }

   totalSupermen(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsTotalSupermen',{headers: headers})
   }

   totalAppoinments(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsTotalAppoinments',{headers: headers})
   }

   getPatients(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsPatients',{headers: headers})
   }

   getDoctors(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsDoctors',{headers: headers})
   }

   getSupermen(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsSupermen',{headers: headers})
   }

   getAppoinments(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsAppoinments',{headers: headers})
   }

   getCategories(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsCategories',{headers: headers})
   }

   postCategory(category: Categories): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    let formData: FormData = new FormData();
    if(category.id == null){
      category.id = 0;
    }
      formData.append('icon', category.icon);
      formData.append('id', category.id.toString());
      formData.append('name', category.name);
    return this.http.post(ipAddress+'/adminPostsCategory',formData,{headers: headers,'responseType': 'text'});
  }

  deleteCategory(category: Categories): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/adminDeleteCategory',category,{headers: headers,'responseType': 'text'});
  }

  saveEmmergencyDoc(emmergencyDoc: User): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/adminSaveEmmergencyDoc',emmergencyDoc,{headers: headers,'responseType': 'text'});
  }

  getEmmergencyDoctors(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/getEmmergencyDoctors',{headers: headers})
   }

   getUser(mobileNumber: string): Observable<any>{
    let param = new HttpParams()
    .set('number' , mobileNumber);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/getUser',{headers: headers,params: param})
   }

   deleteUser(user: User): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/adminArchiveUser',user,{headers: headers,'responseType': 'text'});
  }

  deleteAppoinments(appoinment: Appoinment): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/adminDeleteAppoinment',appoinment,{headers: headers,'responseType': 'text'});
  }

  saveAdvertisementCategory(category: AdvertisementCategory): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/adminSaveAdvertisementCategory',category,{headers: headers,'responseType': 'text'});
  }

  getAdvertisementCategories(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsAdvertisementCategories',{headers: headers})
   }

   saveAdvertisement(advertise: Advertisement): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    let formData: FormData = new FormData();

      formData.append('advertisement', advertise.advertisement);
      formData.append('youtubeLink', advertise.youtubeLink);
      formData.append('categoryId', advertise.category.id.toString());

    return this.http.post(ipAddress+'/adminSaveAdvertisement',formData,{headers: headers,'responseType': 'text'});
  }

  getAllAdvertisements(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/getAdvertisements',{headers: headers})
   }

   deleteAdvertise(advertise: Advertisement): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/adminDeleteAdvertise',advertise,{headers: headers,'responseType': 'text'});
  }

  saveCommision(commision: Commision){
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/adminSaveCommision',commision,{headers: headers,'responseType': 'text'});
  }

  getCommision(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/getCommision',{headers: headers})
   }

   getAdminWallet(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsWallet',{headers: headers})
   }

   
}
