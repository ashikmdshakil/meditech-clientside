import { SuperAdminService } from './../super-admin.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';

@Component({
  selector: 'app-patient-all',
  templateUrl: './patient-all.component.html',
  styleUrls: ['./patient-all.component.css']
})
export class PatientAllComponent implements OnInit {

  superAdminService: SuperAdminService;
  patients: User[] = [];
  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getPatients().subscribe(result =>{
      this.patients = result;
      console.log(result);
    })
  }

}
