import { MeditecWallet } from './../../Model/MeditecWallet.model';
import { Commision } from './../../Model/Commision.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { ManipulatedDoctors } from 'src/app/Model/ManipulatedDoctors.model';
import { UsersService } from 'src/app/Services/users.service';

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
  totalIncome: number;
  totalPaidAppoinments: number;
  totalUnpaidAppoinments: number;
  superAdminService: SuperAdminService;
  emmergencyDoc: User = new User();
  commision: Commision = new Commision();
  meditecWallet: MeditecWallet = new MeditecWallet();
  emmergencyDocs: User[] = [];
  commisionMessage: string;
  totalDiagnostics: number;
  doctors: User[] = [];
  seletedDoctor: User = new User();
  userService: UsersService;
  manipulatedDoctors: ManipulatedDoctors[] = [];

  constructor(superAdminService: SuperAdminService, userService: UsersService) {
    this.superAdminService = superAdminService;
    this.userService = userService;
   }

  ngOnInit(): void {
    this.superAdminService.getAdminDashboardBasicInfo().subscribe(result =>{
      this.totalPatients = result.totalPatients;
      this.totalDoctors = result.totalDoctors;
      this.totalSupermen = result.totalAgents;
      this.totalAppoinments = result.totalAppoinments;
      this.totalPaidAppoinments = result.totalPaidAppoinments;
      this.totalUnpaidAppoinments = result.totalUnpaidAppoinments;
      this.totalDiagnostics = result.totalDiagnostics; 
    })

    this.superAdminService.getCommision().subscribe(result =>{
      this.commision = result;
    })

    this.superAdminService.getAdminWallet().subscribe(result =>{
      this.meditecWallet = result;
      this.totalIncome = this.meditecWallet.totalIncome;
    })
    this.superAdminService.getEmmergencyDoctors().subscribe(result =>{
      this.emmergencyDocs = result;
    })

    this.superAdminService.getManipulatedDoctors().subscribe(result =>{
      this.manipulatedDoctors = result;
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

  saveCommision(){
    this.superAdminService.saveCommision(this.commision).subscribe(result =>{
      if(result === "success"){
        this.commisionMessage = "Saving is successfull !";
      }
      else{
        this.commisionMessage = "Sorry ! something went wrong !";
      }
    }),
    error =>{
      this.commisionMessage = "Sorry ! something went wrong !";
    }
  }

  saveManipulatedDoctor(){
      this.superAdminService.manipulateDoctor(this.seletedDoctor).subscribe(result =>{
        this.manipulatedDoctors.push(result);
        this.seletedDoctor.userId = 0;
        this.seletedDoctor.name = '';
      })
  }

  selectDoctor(id: number, name: string){
    this.seletedDoctor.userId = id;
    this.seletedDoctor.name = name;
  }

  clearManipulatedDoctor(id: number){
    var manipulatedDoctors: ManipulatedDoctors = new ManipulatedDoctors();
    manipulatedDoctors.id = id;
    this.superAdminService.removeManipulateDoctor(manipulatedDoctors).subscribe(result =>{
      this.superAdminService.getManipulatedDoctors().subscribe(result =>{
        this.manipulatedDoctors = result;
      })
    })
  }

}
