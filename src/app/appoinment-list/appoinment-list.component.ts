import { User } from './../User.model';
import { PrescriptionTransferService } from './../Services/prescription-transfer.service';
import { PrescriptionFormComponent } from './../prescription-form/prescription-form.component';
import { Appoinment } from './../Model/Appoinment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorSlot } from './../Model/DoctorSlot.model';
import { DoctorSlotService } from './../Services/doctor-slot.service';
import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Model/Prescription.model';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {
  doctorSlotService: DoctorSlotService;
  prescriptionTransferService: PrescriptionTransferService;
  doctorSlot: DoctorSlot = new DoctorSlot();
  prescription: Prescription = new Prescription();
  appoinment: any;
  router: ActivatedRoute;
  routerA: Router;
  slotId: number;
  appoinments: Appoinment[] = [];

  constructor(doctorSlotService: DoctorSlotService, router: ActivatedRoute, routerA: Router,  prescriptionTransferService: PrescriptionTransferService) {
    this.doctorSlotService = doctorSlotService;
    this.router = router;
    this.routerA = routerA;
    this.prescriptionTransferService = prescriptionTransferService;
   }

  ngOnInit(): void {
    this.router.params.subscribe(param =>{
      this.slotId = param.id;
      console.log("Slot id is "+this.slotId);
    })

    this.doctorSlotService.getPatientList(this.slotId.toString()).subscribe(result =>{
      console.log(result);
      this.appoinments = result;
      console.log("Appoinment Doctor details are");
      this.appoinments.forEach(appoinment => {
        console.log("Appoinment Doctor details are");
        this.doctorSlot = appoinment.doctorSlot;
        console.log(this.doctorSlot.user);
        console.log("Patients information is");
        console.log(appoinment.user);
        console.log("This appoinment id is "+appoinment.id);
      });
    })
  }

  getPrescriptionForm(index : number){
    this.prescription.doctor = this.appoinments[index].doctorSlot.user;
    this.prescription.patient = this.appoinments[index].user;
    this.prescription.appoinmentId = this.appoinments[index].id;
    this.prescriptionTransferService.prescription = null;
    this.prescriptionTransferService.prescription = this.prescription; 
    this.routerA.navigateByUrl('/patient-list/'+this.slotId+'/(prescription:blank)').then(()=>{
    this.routerA.navigateByUrl('/patient-list/'+this.slotId+'/(prescription:prescription-form)',{ state: { id: this.slotId }});
    })
}

getHistory(id:number, name: string){
  this.routerA.navigateByUrl('/patient-list/'+this.slotId).then(()=>{
    this.routerA.navigateByUrl('/patient-list/'+this.slotId+'/(history:prescription-history)',{ state: { id: id, name: name}});
    })
}

}
