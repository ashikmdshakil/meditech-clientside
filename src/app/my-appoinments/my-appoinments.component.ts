import { PrescriptionService } from './../Services/prescription.service';
import { PrescriptionReport } from './../Model/PrescriptionReport.model';
import { AppoinmentsService } from './../Services/appoinments.service';
import { Component, OnInit } from '@angular/core';
import { Appoinment } from '../Model/Appoinment.model';
import { Chamber } from '../Model/Chamber.model';

@Component({
  selector: 'app-my-appoinments',
  templateUrl: './my-appoinments.component.html',
  styleUrls: ['./my-appoinments.component.css']
})
export class MyAppoinmentsComponent implements OnInit {
  appoinmentService: AppoinmentsService;
  appoinments: Appoinment[] = [];
  chamber: Chamber = new Chamber();
  reports: PrescriptionReport[] = [];
  prescriptionService: PrescriptionService;
  message: string;

  constructor(appoinmentService: AppoinmentsService, prescriptionService: PrescriptionService) {
    this.appoinmentService = appoinmentService;
    this.prescriptionService = prescriptionService;
   }

  ngOnInit(): void {
    this.appoinmentService.myAppoinments(localStorage.getItem("username")).subscribe(result =>{
      console.log(result);
      this.appoinments = result;
    })
  }
  uploadImage(event){
    let report: PrescriptionReport = new PrescriptionReport();
    report.image = event.target.files[0];
    this.reports.push(report);
  }

  submitReports(id){
    this.prescriptionService.uploadReports(this.reports, id).subscribe(result =>{
      this.reports = [];
      if(result ===  'success'){
          this.message = "Report has been successfully sent.";
      }
      else{
        this.message = "Sorry, something went wrong.";
      }
    },
    error =>{
      this.message =  "Sorry, something went wrong.";
    }
    
    )
  }

}
