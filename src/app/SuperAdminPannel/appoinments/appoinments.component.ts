import { Appoinment } from './../../Model/Appoinment.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {
  
  superAdminService: SuperAdminService;
  appoinments: Appoinment[] = [];

  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getAppoinments().subscribe(result =>{
      this.appoinments = result;
    })
  }
}
