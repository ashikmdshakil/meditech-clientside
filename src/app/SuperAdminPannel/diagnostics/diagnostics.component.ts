import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})
export class DiagnosticsComponent implements OnInit {

  diagnostics: User[] = [];
  superAdminService: SuperAdminService;
  message: string;

  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getDiagnosticCenters().subscribe(result =>{
      this.diagnostics = result;
    },
    error =>{
      this.message = "Sorry! Something went wrong. It might be connection error."
    }
    )
  }

}
