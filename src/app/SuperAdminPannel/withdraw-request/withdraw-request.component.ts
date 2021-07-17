import { Component, OnInit } from '@angular/core';
import { WithdrawRequest } from '../../Model/WithdrawRequest.model';
import { SuperAdminDashboardComponent } from '../super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-withdraw-request',
  templateUrl: './withdraw-request.component.html',
  styleUrls: ['./withdraw-request.component.css']
})
export class WithdrawRequestComponent implements OnInit {


  isDoctor: boolean = true;
  isDiagnostic: boolean = false;
  doctorWithdrawRequests: WithdrawRequest[] = [];
  diagnosticWithdrawRequests: WithdrawRequest[] = [];
  superAdminService: SuperAdminService;
  message: string;
  selectedRequest: WithdrawRequest = new WithdrawRequest();

  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getDoctorWithdrawRequest().subscribe(result =>{
      this.doctorWithdrawRequests = result;
    })
    this.superAdminService.getDiagnosticWithdrawRequest().subscribe(result =>{
      this.diagnosticWithdrawRequests = result;
    })
  }

  showDoctorsRequest(){
    this.isDoctor = true;
    this.isDiagnostic = false;
  }

  showDiagnosticsRequests(){
    this.isDiagnostic = true;
    this.isDoctor = false;
  }

  selectRequest(id: number, userId: number, name: string){
    this.message = " ";
    this.selectedRequest.id = id;
    this.selectedRequest.user.userId = userId;
    this.selectedRequest.user.name = name;
  }

  close(){
    this.message = " ";
  }

  complete(){
      this.superAdminService.completeRequest(this.selectedRequest.id.toString()).subscribe(result =>{
        if(result == 'success'){
          this.message = "Successfully completed the request!";
          this.superAdminService.getDoctorWithdrawRequest().subscribe(result =>{
            this.doctorWithdrawRequests = result;
          })
          this.superAdminService.getDiagnosticWithdrawRequest().subscribe(result =>{
            this.diagnosticWithdrawRequests = result;
          })
        }
        else{
          this.message = "Sorry ! Some thing went wrong";
        }
      },
      error =>{
        this.message = "Sorry ! Some thing went wrong. It might be a connection error.";
      }
      )
  }

  cancel(){
    this.superAdminService.cancelRequest(this.selectedRequest).subscribe(result =>{
      if(result == 'success'){
        this.message = "Successfully canceled the request!";
        this.superAdminService.getDoctorWithdrawRequest().subscribe(result =>{
          this.doctorWithdrawRequests = result;
        })
        this.superAdminService.getDiagnosticWithdrawRequest().subscribe(result =>{
          this.diagnosticWithdrawRequests = result;
        })
      }
      else{
        this.message = "Sorry ! Some thing went wrong";
      }
    },
    error =>{
      this.message = "Sorry ! Some thing went wrong. It might be a connection error.";
    }
    )
}

}
