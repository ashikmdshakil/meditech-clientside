import { UserAvatar } from './../../UserAvatar.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-doctor-all',
  templateUrl: './doctor-all.component.html',
  styleUrls: ['./doctor-all.component.css']
})
export class DoctorAllComponent implements OnInit {
  imageUrl: any;
  message: string;
  superAdminService: SuperAdminService;
  doctors: User[] = [];
  selectedDoctor: User = new User();
  domSanitizer: DomSanitizer;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
   }
 
  ngOnInit(): void {
    this.superAdminService.getDoctors().subscribe(result =>{
      this.doctors = result;
      console.log(result);
    })
  }

  userInfo(number: string){
    this.doctors.forEach(doctor => {
        if(doctor.mobileNumber === number){
          this.selectedDoctor = null;
          this.selectedDoctor = doctor;
        }
    });
  }

  archiveUser(){
    this.message = null;
    this.superAdminService.deleteUser(this.selectedDoctor).subscribe(result =>{
      if(result === "archived"){
        this.message = "This user has been removed.";
      }
      else if(result === "activated"){
        this.message = "This user has been activated again!";
      }
      else if(result === "failed"){
        this.message = "Sorry Something went wrong.";
      }
    },
    error =>{
      this.message = "Sorry something went wrong. It might be connection problem with server.";
    }
    )
  }
}
 