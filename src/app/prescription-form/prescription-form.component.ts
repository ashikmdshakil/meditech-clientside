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
  testService: TestService;
  prescriptionTransferService: PrescriptionTransferService;
  medicineService: MedicineService;
  medicineList: Medicine[] = [];
  assignedMedicineList: Medicine[] = [];
  tests: Test[] = [];
  assignedTest: Test[] = [];
  

  constructor(router: Router,testService: TestService,userService: UsersService, prescriptionTransferService: PrescriptionTransferService, medicineService: MedicineService) {
    this.userService = userService;
    this.prescriptionTransferService = prescriptionTransferService;
    this.medicineService = medicineService;
    this.testService = testService;
    this.router = router;
   }

  ngOnInit(): void {

    this.slotId = history.state.id;
    console.log("Slot id is "+this.slotId);
    this.prescription = this.prescriptionTransferService.prescription;
    this.medicineService.getMedicineList().subscribe(result =>{
        this.medicineList = result;
        console.log(this.medicineList);
    })
    this.testService.getTests().subscribe(result =>{
      this.tests = result;
    })
    
  }

  prescribeMedicine(){
    this.prescription.medicines = this.assignedMedicineList;
    //this.prescription.tests = this.assignedTest;
    this.userService.saveUserPrescription(this.prescription).subscribe(result =>{
      if(result === 'success'){
          console.log(this.router.url);
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

  addTest(){
    console.log("Added test name is "+ this.testName);
    let test: any;
    test = this.isTestExist(this.testName);
    if(test){
      console.log("This test exists and it's name is "+test.testName);
      this.assignedTest.push(test);
    }
    else{
      console.log("test does not exist");
      let test: Test = new Test();
      test.testName = this.testName;
      this.assignedTest.push(test);
    }
    this.testName = null;
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

  isTestExist(name: string): Test{
      let exist: any;
        for(let i = 0; i< this.tests.length; i++){
          if(this.tests[i].testName === this.testName){
            exist = this.tests[i];
            break;
          }
        }
      return exist;
  }

}
