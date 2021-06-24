import { SuperAdminService } from './../super-admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  router: Router;
  superAdminService: SuperAdminService;

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
    
  }

  dashboard(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:dashboard)');
  }

  registerUser(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:register)');
  }

  doctorList(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:doctors)');
  }

  patientList(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:patients)');
  }

  supermanList(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:supermen)');
  }

  appoinments(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:appoinments)');
  }

  categories(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:categories)');
  }

  advertisements(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:advertisements)');
  }
  blogs(){
    this.router.navigateByUrl('/super-admin-pannel/(pannel:blogs)');
  }
 
} 
