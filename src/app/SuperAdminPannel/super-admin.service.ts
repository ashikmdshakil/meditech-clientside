import { environment } from './../../environments/environment';
import { Commision } from './../Model/Commision.model';
import { Advertisement } from './../Model/Advertisement.model';
import { Appoinment } from './../Model/Appoinment.model';
import { User } from './../User.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../Model/Categories.model';
import { AdvertisementCategory } from '../Model/AdvertisementCategory.model';
import { Blog } from '../Model/Blog.model';
import { BlogCategory } from '../Model/BlogCategory.model';
import { ManipulatedDoctors } from "../Model/ManipulatedDoctors.model";
import { ManipulatedDiagnostic } from '../Model/ManipulatedDiagnostic.model';

const ipAddress = environment.ip;
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
   getCompleteAppoinments(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsCompleteAppoinments',{headers: headers})
   }
   getPendingAppoinments(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsPendingAppoinments',{headers: headers})
   }
   getTodaysAppoinments(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsTodaysAppoinments',{headers: headers})
   }
   getWeeksAppoinments(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsWeeksAppoinments',{headers: headers})
   }
   getMonthsAppoinments(): Observable<any>{
    /* let param = new HttpParams()
    .set('mobileNumber' , mobileNumber); */
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsMonthsAppoinments',{headers: headers})
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
   
   changePassword(previousPass: string, newPass: string){
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    let formData: FormData = new FormData();
      formData.append('previousPass', previousPass);
      formData.append('newPass', newPass);
      formData.append('mobileNumber', localStorage.getItem('username'));
    return this.http.post(ipAddress+'/changePassword',formData,{headers: headers,'responseType': 'text'});
  }

  getDoctorBasicInfo(id: string): Observable<any>{
    let param = new HttpParams()
    .set('doctorId' , id);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/doctorBasicInfos',{headers: headers, params: param})
   }

   getUserBasicInfo(id: string): Observable<any>{
    let param = new HttpParams()
    .set('userId' , id);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/userBasicInfos',{headers: headers, params: param})
   }

   getSupermanBasicInfo(id: string): Observable<any>{
    let param = new HttpParams()
    .set('supermanId' , id);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/supermanBasicInfos',{headers: headers, params: param});
   }

   getAgentUsers(number: string): Observable<any>{
    let param = new HttpParams()
    .set('number' , number);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/getAdminPatients',{headers: headers, params: param});
   }

   getNotifications(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsAllNotifications',{headers: headers});
   }

   getAdminDashboardBasicInfo(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAddress+'/adminGetsDashboardBasicInfos',{headers: headers})
   }

   postBlog(blog: Blog): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/createBlog',blog,{headers: headers,'responseType': 'text'});
  }

  getBlogs(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/getBlogs',{headers: headers});
  }

  removeBlog(blog: Blog): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/removeBlog',blog,{headers: headers,'responseType': 'text'});
  }
   
  getBlogCategories(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/getBlogCategories',{headers: headers});
  }

  createBlogCategory(blogCategory: BlogCategory): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/createBlogCategory',blogCategory,{headers: headers,'responseType': 'text'});
  }

  removeBlogCategory(blogCategory: BlogCategory): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/removeBlogCategory',blogCategory,{headers: headers,'responseType': 'text'});
  }

  getDiagnosticCenters(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/getDiagnosticCenters',{headers: headers});
  }

  getFullyCOmpleteAppoinments(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/adminGetsFullyCompleteAppoinments',{headers: headers});
  }

  getDoctorsAppoinments(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/adminGetsDoctorAppoinments',{headers: headers, params: param});
  }

  makeAppoinmentCOmplete(id: string): Observable<any>{
    let formData: FormData = new FormData();
    formData.append('appoinmentId', id);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/makeAppoinmentComplete',formData,{headers: headers,'responseType': 'text'});
  }

  removeDiagnosticCenter(id: string): Observable<any>{
    let formData: FormData = new FormData();
    formData.append('id', id);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/removeDiagnosticCenter',formData,{headers: headers,'responseType': 'text'});
  }

  getDiagnosticBasicInfos(id: string){
    let param = new HttpParams()
    .set('id' , id);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/getDiagnosticBasicInfos',{headers: headers, params: param});
  }

  getManipulatedDoctors(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/getManipulatedDoctors',{headers: headers});
  }

  manipulateDoctor(doctor: User): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/manipulateTopDoctors',doctor,{headers: headers});
  }

  manipulateHomePageDoctor(doctor: User): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/manipulateHomePageDoctors',doctor,{headers: headers});
  }

  removeManipulateDoctor(manipulatedDoctors: ManipulatedDoctors): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/removeManipulatedTopDoctors',manipulatedDoctors,{headers: headers,'responseType': 'text'});
  }

  removeManipulateHomePageDoctor(manipulatedDoctors: ManipulatedDoctors): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/removeHomePageDoctors',manipulatedDoctors,{headers: headers,'responseType': 'text'});
  }

  getManipulatedHomePageDoctors(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/getHomePageDoctors',{headers: headers});
  }

  getManipulatedDIagnostics(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/getManipulatedDiagnostics',{headers: headers});
  }

  manipulateDiagnostic(diagnostic: User): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/manipulateTopDiagnostics',diagnostic,{headers: headers});
  }

  removeDiagnostic(manipulatedDiagnostics: ManipulatedDiagnostic): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAddress+'/removeManipulatedTopDiagnostics',manipulatedDiagnostics,{headers: headers,'responseType': 'text'});
  }

  getDIagnostics(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAddress+'/getAllDiagnostics',{headers: headers});
  }


}
