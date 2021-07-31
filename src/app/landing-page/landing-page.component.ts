import { Component, OnInit } from '@angular/core';
import { SuperAdminDashboardComponent } from '../SuperAdminPannel/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminService } from '../SuperAdminPannel/super-admin.service';
import { HomePageDoctrs} from '../Model/HomePage.model'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  info: any;
  superAdminService: SuperAdminService;
  homePageDoctors: HomePageDoctrs[] = [];
  domSanitizer: DomSanitizer;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
   }

  ngOnInit(): void {
    this.superAdminService.getLandingPageInfo().subscribe(result =>{
        this.info = result;
    })
    this.superAdminService.getManipulatedHomePageDoctors().subscribe(result =>{
        this.homePageDoctors = result;
        this.homePageDoctors.forEach(doctor => {
          if(doctor.doctor.userAvatar.image !== null){
            doctor.image = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+doctor.doctor.userAvatar.image);
          }
        });
    })
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
