import { AdvertisementCategory } from './../../Model/AdvertisementCategory.model';
import { Advertisement } from './../../Model/Advertisement.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Categories } from 'src/app/Model/Categories.model';
import { SuperAdminService } from '../super-admin.service';
import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  id: string;
  message: string;
  superAdminService: SuperAdminService;
  categories: Categories[] = [];
  advertisementCategories: AdvertisementCategory[] = [];
  selectedAdCategories: AdvertisementCategory[] = [];
  category: Categories = new Categories();
  advertisement: Advertisement = new Advertisement();
  advertisementCategory: AdvertisementCategory = new AdvertisementCategory(); 
  domSanitizer: DomSanitizer;
  router: Router;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer, router: Router) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
    this.router = router;
   }

  ngOnInit(): void {
    this.superAdminService.getCategories().subscribe(result =>{
      this.categories = result;
      this.categories.forEach(category => {
          category.iconUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+category.icon);
      });
    })

    this.superAdminService.getAdvertisementCategories().subscribe(result =>{
      this.advertisementCategories = result;
    })
  }

  categoryInfo(id: number){
    this.categories.forEach(element => {
      if(element.id == id){
        this.category = element;
      }
    });
  }
  uploadImage(event){
    this.advertisement.advertisement = event.target.files[0];
    this.advertisement.advertisementUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+this.advertisement.advertisement);
  }
  save(){
    this.advertisement.advertisementCategory = this.selectedAdCategories[0];

    this.superAdminService.saveAdvertisement(this.advertisement).subscribe(result =>{
      if(result == "success"){
        this.message = "Category is saved successfully ! Refresh the page."; 
      }
      else{
        this.message = "Sorry ! Something went wrong !";
      }
    },
    error =>{
      console.log("Sorry ! There might be any connection issue with server.")
    }
    );
   
    
}

delete(){
  this.superAdminService.saveAdvertisement(this.advertisement).subscribe(result =>{
    if(result == "success"){
      this.message = "Category is deleted successfully ! Please refresh the page."; 
    }
    else{
      this.message = "Sorry ! Something went wrong !";
    }
  },
  error =>{
    console.log("Sorry ! There might be any connection issue with server.")
  });
  delete this.category;
  this.category = new Categories();
}

//advertisement
saveCategory(){
  console.log("New advertisement category name is "+ this.advertisementCategory.categoryName);
  this.superAdminService.saveAdvertisementCategory(this.advertisementCategory).subscribe(result =>{
    if(result === "success"){
      this.message = "Category created successfully.";
    }
    else{
      this.message = "Sorry, Something went wrong !";
    }
  },
  error =>{
    this.message = "Sorry, Something went wrong !";
  })
  
}

  selectAdvertiseCategory(id: number){
    this.advertisementCategories.forEach(category => {
      if(category.id === id){
        this.selectedAdCategories[0] = category;
      }
    });

  }

}
