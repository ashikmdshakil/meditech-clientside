import { Appoinment } from './../../Model/Appoinment.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';
import { getLocaleDateFormat } from '@angular/common';
import { UsersService } from 'src/app/Services/users.service';
import { Prescription } from 'src/app/Model/Prescription.model';
import { PrescriptionService } from 'src/app/Services/prescription.service';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {
  
  superAdminService: SuperAdminService;
  userService: UsersService;
  appoinments: Appoinment[] = [];
  doctors: User[] = [];
  selectedAppoinment: Appoinment = new Appoinment();
  message: string;
  prescription: Prescription = new Prescription();
  prescriptionService: PrescriptionService;

  constructor(superAdminService: SuperAdminService, userService: UsersService, prescriptionService: PrescriptionService) {
    this.superAdminService = superAdminService;
    this.userService = userService;
    this.prescriptionService = prescriptionService;
   }

  ngOnInit(): void {
    this.superAdminService.getAppoinments().subscribe(result =>{
      this.appoinments = result;
    })
    this.userService.getDoctorList().subscribe(result =>{
      result.forEach(element => {
        let doctor: User = new User();
        doctor.userId = element[0];
        doctor.name = element[1];
        this.doctors.push(doctor);
      });
    })

  }

  getCompleteAppoinments(){
    this.superAdminService.getCompleteAppoinments().subscribe(result =>{
      this.appoinments = result;
    })
  }

  getPendingAppoinments(){
    this.superAdminService.getPendingAppoinments().subscribe(result =>{
      this.appoinments = result;
    })
  }
  getTodaysAppoinments(){
    this.superAdminService.getTodaysAppoinments().subscribe(result =>{
      this.appoinments = result;
    })
  }
  getWeeksAppoinments(){
    this.superAdminService.getWeeksAppoinments().subscribe(result =>{
      this.appoinments = result;
    })
  }
  getMonthsAppoinments(){
    this.superAdminService.getMonthsAppoinments().subscribe(result =>{
      this.appoinments = result;
    })
  }
  getFullyCompleteAppoinments(){
    this.superAdminService.getFullyCOmpleteAppoinments().subscribe(result =>{
      this.appoinments = result;
    })
  }

  getDoctorsAppoinments(id: number){
    this.superAdminService.getDoctorsAppoinments(id.toString()).subscribe(result =>{
      this.appoinments = result;
    })
  }

  appoinmentInfo(id: number){
    this.appoinments.forEach(appoinment => {
      if(appoinment.id === id){
        this.selectedAppoinment = null;
        this.selectedAppoinment = appoinment;
      }
  });
  }

  deleteAppoinment(){
      this.message = null;
      this.superAdminService.deleteAppoinments(this.selectedAppoinment).subscribe(result =>{
        console.log(result);
        if(result === "archived"){
          this.message = "This user has been removed.";
        }
        else if(result === "activated"){
          this.message = "This user has been activated again!";
        }
        else if(result === "failed"){
          this.message = "Sorry Something went wrong.";
        }
        else{
          this.message = "Sorry Something went wrong.";
        }
      },
      error =>{
        this.message = "Sorry something went wrong. It might be connection problem with server.";
      });
  }

  selectForComplete(id: number){
    this.appoinments.forEach(element => {
      if(element.id === id){
        this.selectedAppoinment = element;
      }
    });
  }
  selectForDelete(id: number){
    this.appoinments.forEach(element => {
      if(element.id === id){
        this.selectedAppoinment = element;
      }
    });
  }

  completeAppoinment(){
    if(this.selectedAppoinment.status === "Payment Complete"){
      this.superAdminService.makeAppoinmentCOmplete(this.selectedAppoinment.id.toString()).subscribe(result =>{
        if(result === 'success'){
          this.message = "This appoinment has been successfully completed.";
        }
        else{
          this.message = "Sorry! Something went wrong.";
        }
      },
      error =>{
        this.message = "Sorry! Something went wrong. It might be a connection error.";
      }
      )
    }
    else{
      this.message = "Sorry! Payment of this appoinment is not complete.";
    }
  }

  getPrescription(id: number){
    this.prescriptionService.getUserPrescriptions(id).subscribe(result =>{
      if(result == null){
        this.prescription.medicines = [];
        this.prescription.tests = [];
        this.prescription.referredDoctor.name = " ";
      }
      else{
        this.prescription = result;
        if(this.prescription.referredDoctor == null){
          this.prescription.referredDoctor.name = " ";
        }
      }
    })
  }

  close(){
    this.message = null;
  }

}
