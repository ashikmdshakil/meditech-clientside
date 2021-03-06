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
  appoinment: Appoinment = new Appoinment();
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
    })

    this.doctorSlotService.getPatientList(this.slotId.toString()).subscribe(result =>{
      console.log(result);
      this.appoinments = result;
      this.appoinments.forEach(appoinment => {
        this.doctorSlot = appoinment.doctorSlot;
      });
    })
  }

  getPrescriptionForm(index : number){
    this.prescription.doctor = this.appoinments[index].doctorSlot.user;
    this.prescription.patient = this.appoinments[index].user;
    this.appoinment.id = this.appoinments[index].id;
    this.prescription.appoinment = this.appoinment;
    this.prescriptionTransferService.setPrescription(this.prescription);
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
