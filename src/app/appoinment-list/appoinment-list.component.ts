import { Appoinment } from './../Model/Appoinment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorSlot } from './../Model/DoctorSlot.model';
import { DoctorSlotService } from './../Services/doctor-slot.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {
  doctorSlotService: DoctorSlotService;
  doctorSlot: DoctorSlot = new DoctorSlot();
  router: ActivatedRoute;
  routerA: Router;
  slotId: number;
  appoinments: Appoinment[] = [];

  constructor(doctorSlotService: DoctorSlotService, router: ActivatedRoute, routerA: Router) {
    this.doctorSlotService = doctorSlotService;
    this.router = router;
    this.routerA = routerA;
   }

  ngOnInit(): void {
    this.router.params.subscribe(param =>{
      this.slotId = param.id;
      console.log("Slot id is "+this.slotId);
    })

    this.doctorSlotService.getPatientList(this.slotId.toString()).subscribe(result =>{
      console.log(result);
      this.appoinments = result;
      this.appoinments.forEach(appoinment => {
        console.log(appoinment.user.name);
      });
    })
  }

  getPrescriptionForm(id: number, name: string){ 
    this.routerA.navigateByUrl('/patient-list/'+this.slotId+'/(prescription:blank)').then(()=>{
    this.routerA.navigateByUrl('/patient-list/'+this.slotId+'/(prescription:prescription-form)',{ state: { id: id, name: name}});
    })
}

getHistory(id:number, name: string){
  this.routerA.navigateByUrl('/patient-list/'+this.slotId).then(()=>{
    this.routerA.navigateByUrl('/patient-list/'+this.slotId+'/(history:prescription-history)',{ state: { id: id, name: name}});
    })
}

}
