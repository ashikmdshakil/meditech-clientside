import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message: string;
  totalPatients: number;
  totalDoctors: number;
  totalSupermen: number;
  totalAppoinments: number;
  superAdminService: SuperAdminService;
  emmergencyDoc: User = new User();
  emmergencyDocs: User[] = [];

  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.totalPatients().subscribe(result =>{
      this.totalPatients = result;
    })

    this.superAdminService.totalDoctors().subscribe(result =>{
      this.totalDoctors = result;
    })

    this.superAdminService.totalSupermen().subscribe(result =>{
      this.totalSupermen = result;
    })

    this.superAdminService.totalAppoinments().subscribe(result =>{
      this.totalAppoinments = result;
    })

    this.superAdminService.getEmmergencyDoctors().subscribe(result =>{
      this.emmergencyDocs = result;
    })
  }

  saveDoc(){
    this.superAdminService.saveEmmergencyDoc(this.emmergencyDoc).subscribe(result =>{
      if(result === "success"){
        this.message = "24/7 Doctor is successfully saved !";
      }
      else{
        this.message = "Soory! Somehing went wrong. May be this user exists already.";
      }
    },
    error =>{
      this.message = "Sorry! It might be connection problem with server.";
    }
    )
    delete this.emmergencyDoc;
    this.emmergencyDoc = new User();
  }

}
