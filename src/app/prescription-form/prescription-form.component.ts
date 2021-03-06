import { PrescriptionService } from './../Services/prescription.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from './../Model/Test.model';
import { TestService } from './../Services/test.service';
import { Medicine } from './../Model/Medicine.model';
import { MedicineService } from './../Services/medicine.service';
import { UsersService } from './../Services/users.service';
import { User } from './../User.model';
import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Model/Prescription.model';
import { PrescriptionTransferService } from '../Services/prescription-transfer.service';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.css']
})
export class PrescriptionFormComponent implements OnInit {
  slotId: number;
  medicineName: string;
  testName: string;
  prescription: Prescription = new Prescription();
  router: Router;
  userService: UsersService;
  prescriptionTransferService: PrescriptionTransferService;
  medicineService: MedicineService;
  prescriptionService: PrescriptionService;
  medicineList: Medicine[] = [];
  assignedMedicineList: Medicine[] = [];
  
  

  constructor(prescriptionService: PrescriptionService,router: Router,userService: UsersService, prescriptionTransferService: PrescriptionTransferService, medicineService: MedicineService) {
    this.userService = userService;
    this.prescriptionTransferService = prescriptionTransferService;
    this.medicineService = medicineService;
    this.router = router;
    this.prescriptionService = prescriptionService;
   }

  ngOnInit(): void {
    this.slotId = history.state.id;
    this.prescription = this.prescriptionTransferService.prescription;
    this.medicineService.getMedicineList().subscribe(result =>{
        this.medicineList = result;
    })
    this.prescriptionService.getUserPrescriptions(this.prescription.appoinmentId.toString()).subscribe(result =>{
      this.prescription = result;
      this.assignedMedicineList = this.prescription.medicines;
    })
    
  }

  prescribeMedicine(){
    this.prescription.medicines = this.assignedMedicineList;
    this.userService.saveUserPrescription(this.prescription).subscribe(result =>{
      if(result === 'success'){
          this.router.navigateByUrl('/patient-list/'+this.slotId+'/(prescription:prescription-form-full)');
      }
    })  
  }

  add(){
    console.log("Added medicine name is "+ this.medicineName);
    let medicine: any;
    medicine = this.isExist(this.medicineName);
    if(medicine){
      console.log("This medicine exists and it's name is "+medicine.medicineName);
      this.assignedMedicineList.push(medicine);
    }
    else{
      console.log("Medicine does not exist");
      let medicine: Medicine = new Medicine();
      medicine.medicineName = this.medicineName;
      this.assignedMedicineList.push(medicine);
    }
    this.medicineName = null;
  }

 
  isExist(name: string): Medicine{
    let exist: any;
      for(let i = 0; i< this.medicineList.length; i++){
        if(this.medicineList[i].medicineName === this.medicineName){
          exist = this.medicineList[i];
          break;
        }
      }
    return exist;
  }

}
