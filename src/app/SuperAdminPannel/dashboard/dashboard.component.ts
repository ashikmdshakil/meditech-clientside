import { MeditecWallet } from './../../Model/MeditecWallet.model';
import { Commision } from './../../Model/Commision.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { RecommendedDiagnostics } from 'src/app/Model/RecommendedDiagnostics.model';
import { SuperAdminService } from '../super-admin.service';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { ManipulatedDoctors } from 'src/app/Model/ManipulatedDoctors.model';
import { ManipulatedDiagnostic } from 'src/app/Model/ManipulatedDiagnostic.model';
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
  seletedHomePageDoctor: User = new User();
  userService: UsersService;
  manipulatedDoctors: ManipulatedDoctors[] = [];
  manipulatedHomePageDoctors: ManipulatedDoctors[] = [];
  manipulatedDiagnostics: ManipulatedDiagnostic[] = [];
  recoDiagnostics: RecommendedDiagnostics[] = [];
  selectedDiagnostic: User = new User();  
  selectedRecoDiagnostic: User = new User(); 
  diagnostics: User[] = [];

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

    this.superAdminService.getManipulatedHomePageDoctors().subscribe(result =>{
      this.manipulatedHomePageDoctors = result;
    })

    this.superAdminService.getManipulatedDIagnostics().subscribe(result =>{
      this.manipulatedDiagnostics = result;
    })

    this.superAdminService.getRecommendedDIagnostics().subscribe(result =>{
      this.recoDiagnostics = result;
    })

    this.getAllDiagnostics();

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
  saveManipulatedHomePageDoctor(){
    this.superAdminService.manipulateHomePageDoctor(this.seletedHomePageDoctor).subscribe(result =>{
      this.manipulatedHomePageDoctors.push(result);
      this.seletedHomePageDoctor.userId = 0;
      this.seletedHomePageDoctor.name = '';
    })
}
saveManipulatedDiagnostic(){
  this.superAdminService.manipulateDiagnostic(this.selectedDiagnostic).subscribe(result =>{
    this.manipulatedDiagnostics.push(result);
    this.selectedDiagnostic.userId = 0;
    this.selectedDiagnostic.name = '';
  })
}

saveRecoDiagnostic(){
  this.superAdminService.manipulateRecommendedDiagnostic(this.selectedRecoDiagnostic).subscribe(result =>{
    this.recoDiagnostics.push(result);
    this.selectedRecoDiagnostic.userId = 0;
    this.selectedRecoDiagnostic.name = '';
  })
}

  selectDoctor(id: number, name: string){
    this.seletedDoctor.userId = id;
    this.seletedDoctor.name = name;
  }

  selectDoctorForHomePage(id: number, name: string){
    this.seletedHomePageDoctor.userId = id;
    this.seletedHomePageDoctor.name = name;
  }

  selectDiagnostic(id: number, name: string){
    this.selectedDiagnostic.userId = id;
    this.selectedDiagnostic.name = name;
  }

  selectRecoDiagnostic(id: number, name: string){
    this.selectedRecoDiagnostic.userId = id;
    this.selectedRecoDiagnostic.name = name;
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
  
  clearManipulatedDiagnostics(id: number){
    var manipulatedDiagnostics: ManipulatedDiagnostic = new ManipulatedDiagnostic();
    manipulatedDiagnostics.id = id;
    this.superAdminService.removeDiagnostic(manipulatedDiagnostics).subscribe(result =>{
      this.superAdminService.getManipulatedDIagnostics().subscribe(result =>{
        this.manipulatedDiagnostics = result;
      })
    })
  }

  clearRecoDiagnostics(id: number){
    var recoDiagnostics: RecommendedDiagnostics = new RecommendedDiagnostics();
    recoDiagnostics.id = id;
    this.superAdminService.removeRecommendedDiagnostic(recoDiagnostics).subscribe(result =>{
      this.superAdminService.getRecommendedDIagnostics().subscribe(result =>{
        this.recoDiagnostics = result;
      })
    })
  }

  clearManipulatedHomePageDoctor(id: number){
    var manipulatedHomePageDoctors: ManipulatedDoctors = new ManipulatedDoctors();
    manipulatedHomePageDoctors.id = id;
    this.superAdminService.removeManipulateHomePageDoctor(manipulatedHomePageDoctors).subscribe(result =>{
      console.log(result);
      this.superAdminService.getManipulatedHomePageDoctors().subscribe(result =>{
        this.manipulatedHomePageDoctors = result;
      })
    })
  }

  getAllDiagnostics(){
    this.superAdminService.getDIagnostics().subscribe(result =>{
      result.forEach(element => {
          var diagnostic: User = new User();
          diagnostic.userId = element[0];
          diagnostic.name = element[1];
          this.diagnostics.push(diagnostic);
      });
    })
  }

}
