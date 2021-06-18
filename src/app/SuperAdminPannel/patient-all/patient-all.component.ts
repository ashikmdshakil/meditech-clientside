import { SuperAdminService } from './../super-admin.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AddressBook } from 'src/app/AddressBook.model';
import { RegistrationService } from 'src/app/registration.service';

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

  patient: User = new User();
  addressBook: AddressBook = new AddressBook();
  registrationService: RegistrationService;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer, registrationService: RegistrationService) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
    this.registrationService = registrationService;
   }

  ngOnInit(): void {
    this.superAdminService.getPatients().subscribe(result =>{
      result.forEach(element => {
        let patient = new User();
        patient.userId = element[0];
        patient.name = element[1];
        patient.mobileNumber = element[2];
        patient.email = element[3];
        this.patients.push(patient);
      });
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
  registerUser(){
    this.patient.addressBooks = this.addressBook;
    this.registrationService.registerPatientDetails(this.patient).subscribe(result =>{
      if(result === "success"){
        this.message = "Registration is successfull";
      }
      else{
        this.message = "Sorry ! Something went wrong.";
      }
    }),
    error =>{
      this.message = "Soory! something went wrong. It might be a connection error";
    }
  }

}
