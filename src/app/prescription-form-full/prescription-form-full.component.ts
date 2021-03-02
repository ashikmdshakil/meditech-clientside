import { PrescriptionService } from './../Services/prescription.service';
import { PrescriptionTransferService } from './../Services/prescription-transfer.service';
import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Model/Prescription.model';

@Component({
  selector: 'app-prescription-form-full',
  templateUrl: './prescription-form-full.component.html',
  styleUrls: ['./prescription-form-full.component.css']
})
export class PrescriptionFormFullComponent implements OnInit {

  prescriptionTransferService : PrescriptionTransferService;
  prescriptionService: PrescriptionService;
  prescription: Prescription = new Prescription();

  constructor(prescriptionTransferService: PrescriptionTransferService, prescriptionService: PrescriptionService) {
    this.prescriptionTransferService = prescriptionTransferService;
    this.prescriptionService = prescriptionService;
   }

  ngOnInit(): void {
    this.prescription = this.prescriptionTransferService.prescription;
    this.prescriptionService.getUserPrescriptions(this.prescription.appoinmentId, this.prescription.patient.userId).subscribe(result =>{
      this.prescription = result;
      console.log("Full prescription is here "+this.prescription);
    })
  }

}
