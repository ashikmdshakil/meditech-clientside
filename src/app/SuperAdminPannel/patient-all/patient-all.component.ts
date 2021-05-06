import { SuperAdminService } from './../super-admin.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-patient-all',
  templateUrl: './patient-all.component.html',
  styleUrls: ['./patient-all.component.css']
})
export class PatientAllComponent implements OnInit {

  imageUrl: any;
  message: string;
  superAdminService: SuperAdminService;
  patients: User[] = [];
  user: User = new User();
  selectedPatient: User = new User();
  domSanitizer: DomSanitizer;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
   }

  ngOnInit(): void {
    this.superAdminService.getPatients().subscribe(result =>{
      this.patients = result;
    })
  }

  userInfo(number: string){
    this.patients.forEach(patient => {
        if(patient.mobileNumber === number){
          this.selectedPatient = null;
          this.selectedPatient = patient;
        }
    });
  }

  userDetails(number : string){
    window.open("/user-details/"+number,"_blank"); 
    
  }

  archiveUser(){
    this.message = null;
    this.superAdminService.deleteUser(this.selectedPatient).subscribe(result =>{
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
