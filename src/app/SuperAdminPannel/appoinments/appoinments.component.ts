import { Appoinment } from './../../Model/Appoinment.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {
  
  superAdminService: SuperAdminService;
  appoinments: Appoinment[] = [];
  selectedAppoinment: Appoinment = new Appoinment();
  message: string;

  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getAppoinments().subscribe(result =>{
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
}
