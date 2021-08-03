import { Component, OnInit } from '@angular/core';
import { SuperAdminDashboardComponent } from '../SuperAdminPannel/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminService } from '../SuperAdminPannel/super-admin.service';
import { HomePageDoctrs} from '../Model/HomePage.model'
import { DomSanitizer } from '@angular/platform-browser';
import { CategoryService } from '../Services/category.service';
import { Categories } from '../Model/Categories.model';

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
  categoryService: CategoryService;
  categories: Categories[] = [];
  category: Categories = new Categories();

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer, categoryService: CategoryService) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
    this.categoryService = categoryService;
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
          else{
            doctor.image = this.domSanitizer.bypassSecurityTrustUrl('../../assets/assets/img/departments-1.jpg');
          }
        });
    })
    this.categoryService.getCategories().subscribe(result =>{
        this.categories = result;
        this.categories.forEach(element => {
          element.iconUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+element.icon);
        });
        this.category = this.categories[0];
    })

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  selectCategory(id: number){
    this.categories.forEach(element => {
      if(element.id === id){
        this.category = element;
      }
    });
  }

}
