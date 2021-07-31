import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})
export class DiagnosticsComponent implements OnInit {

  diagnostics: User[] = [];
  superAdminService: SuperAdminService;
  message: string;
  selectedDiagnostic: User = new User();

  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getDiagnosticCenters().subscribe(result =>{
      result.forEach(element => {
        let diagnostic: User = new User();
        diagnostic.userId = element[0];
        diagnostic.name = element[1];
        diagnostic.email = element[2];
        diagnostic.mobileNumber = element[3];
        this.diagnostics.push(diagnostic);
      });
    },
    error =>{
      this.message = "Sorry! Something went wrong. It might be connection error."
    }
    )
  }

  userInfo(number: string){
    this.diagnostics.forEach(diagnostic => {
        if(diagnostic.mobileNumber === number){
          this.selectedDiagnostic = null;
          this.selectedDiagnostic = diagnostic;
        }
    });
  }

  close(){
    this.message = null;
  }

  removeDiagnostic(){
    this.superAdminService.removeDiagnosticCenter(this.selectedDiagnostic.userId.toString()).subscribe(result =>{
      if(result === 'success'){
        this.message = "Diagnostic Center is successfully removed.";
      }
      else{
        this.message = "Sorry something went wrong!";
      }
    },
    error=>{
      this.message = "Sorry! Something went wrong. It might be a connection error.";
    }
    )
  }
  userDetails(number : string){
    window.open("/user-details/"+number,"_blank");
  }

  seeBookings(number: string){
    window.open("/bookedTests/"+number,"_blank");
  }

}
