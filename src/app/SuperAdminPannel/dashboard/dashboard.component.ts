import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalPatients: number;
  totalDoctors: number;
  totalSupermen: number;
  totalAppoinments: number;
  superAdminService: SuperAdminService;

  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.totalPatients().subscribe(result =>{
      this.totalPatients = result;
    })

    this.superAdminService.totalDoctors().subscribe(result =>{
      this.totalDoctors = result;
    })

    this.superAdminService.totalSupermen().subscribe(result =>{
      this.totalSupermen = result;
    })

    this.superAdminService.totalAppoinments().subscribe(result =>{
      this.totalAppoinments = result;
    })
  }

}
