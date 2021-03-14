import { UsersService } from './../Services/users.service';
import { User } from './../User.model';
import { MedicineScedule } from './../Model/MedicineScedule.model';
import { TestService } from './../Services/test.service';
import { PrescriptionService } from './../Services/prescription.service';
import { PrescriptionTransferService } from './../Services/prescription-transfer.service';
import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Model/Prescription.model';
import { Medicine } from '../Model/Medicine.model';
import { Test } from '../Model/Test.model';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-prescription-form-full',
  templateUrl: './prescription-form-full.component.html',
  styleUrls: ['./prescription-form-full.component.css']
})
export class PrescriptionFormFullComponent implements OnInit {
  message: string;
  testName: string;
  referredDoctor: User = new User();
  advice: string;
  prescriptionTransferService : PrescriptionTransferService;
  prescriptionService: PrescriptionService;
  prescription: Prescription = new Prescription();
  assignedMedicineList: Medicine[] = [];
  userService: UsersService;
  testService: TestService;
  tests: Test[] = [];
  assignedTest: Test[] = [];
  scedules: MedicineScedule[] = [];
  referenceDoctors: User[] = [];

  constructor(userService: UsersService,testService: TestService,prescriptionTransferService: PrescriptionTransferService, prescriptionService: PrescriptionService) {
    this.prescriptionTransferService = prescriptionTransferService;
    this.prescriptionService = prescriptionService;
    this.testService = testService;
    this.userService = userService;
   }

  ngOnInit(): void {
    this.prescription = this.prescriptionTransferService.prescription;
     this.prescriptionService.getUserPrescriptions(this.prescription.appoinmentId.toString()).subscribe(result =>{
      this.prescription = result;
      if( result['scedules'] !== null){
        this.scedules = result['scedules'];
      }
      if( result['tests'] !== null){
        this.assignedTest = result['tests'];
      }
      if(result['referredDoctor'] !== null){
        this.referredDoctor = result['referredDoctor'];
      }
      if(result['advice'] !== null){
        this.advice = result['advice'];
      }
      if(this.scedules.length == 0){
       this.prescription.medicines.forEach(medicine => {
        let schedule = new MedicineScedule();
        schedule.medicine = medicine;
        console.log("The medicine name is "+ schedule) 
        this.scedules.push(schedule);
      });
    }
      
    })  
    this.testService.getTests().subscribe(result =>{
      this.tests = result;
    })
   this.userService.getAppDoctors().subscribe(result =>{
      this.referenceDoctors = result;
    }) 

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
finalPrescription(){
  this.prescription.scedules = this.scedules;
  this.prescription.tests = this.assignedTest;
  this.prescription.advice = this.advice;
  this.referenceDoctors.forEach(element => {
    if(element.name === this.referredDoctor.name){
      this.prescription.referredDoctor = element;
    }
  });
  this.prescriptionService.saveUserPrescription(this.prescription).subscribe(result =>{
      if(result === 'success'){
        this.message = 'This Prescription is saved successfully.';
      }
      else{
        this.message = 'Sorry something went wrong. Prescription is not saved.'; 
      }
  })
}

}