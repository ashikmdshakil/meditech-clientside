import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { SuperAdminDashboardComponent } from '../super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  id: number;
  activatedRoute: ActivatedRoute;
  superAdminService: SuperAdminService;
  tests: any = [];

  constructor(activatedRoute: ActivatedRoute, superAdminService: SuperAdminService) {
      this.activatedRoute = activatedRoute;
      this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.id = param.id;
    })
    this.superAdminService.getAllTests(this.id.toString()).subscribe(result=>{
        this.tests = result;
    })
  }

}
