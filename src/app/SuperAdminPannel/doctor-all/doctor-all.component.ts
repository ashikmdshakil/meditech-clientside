import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-doctor-all',
  templateUrl: './doctor-all.component.html',
  styleUrls: ['./doctor-all.component.css']
})
export class DoctorAllComponent implements OnInit {

  superAdminService: SuperAdminService;
  doctors: User[] = [];
  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getDoctors().subscribe(result =>{
      this.doctors = result;
      console.log(result);
    })
  }
}
