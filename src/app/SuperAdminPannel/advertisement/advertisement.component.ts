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
  advertisementCategories: AdvertisementCategory[] = [];
  selectedAdCategories: AdvertisementCategory[] = [];
  advertisements: Advertisement[] = [];
  advertisement: Advertisement = new Advertisement();
  advertisementCategory: AdvertisementCategory = new AdvertisementCategory();
  updateCategory: AdvertisementCategory = new AdvertisementCategory(); 
  domSanitizer: DomSanitizer;
  router: Router;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer, router: Router) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
    this.router = router;
   }

  ngOnInit(): void {
    this.superAdminService.getAllAdvertisements().subscribe(result =>{
      this.advertisements = result;
      this.advertisements.forEach(advertise => {
          advertise.advertisementUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+ advertise.advertisement); 
          advertise.youtubeUrl= this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+advertise.youtubeLink.slice(16));     
      });
    })
    this.superAdminService.getAdvertisementCategories().subscribe(result =>{
      this.advertisementCategories = result;
    })
  }
/* 
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
    this.advertisement.category = this.selectedAdCategories[0];

    this.superAdminService.saveAdvertisement(this.advertisement).subscribe(result =>{
      if(result == "success"){
        this.message = "Category is saved successfully ! Refresh the page."; 
        this.router.navigateByUrl('/super-admin-pannel/(pannel:blank)').then(next =>{
          this.router.navigateByUrl('/super-admin-pannel/(pannel:advertisements)');
        })
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

delete(id: number){
  this.advertisements.forEach(ad => {
    if(ad.id === id){
      let advertise: Advertisement = new Advertisement();
      advertise = ad;
      this.superAdminService.deleteAdvertise(advertise).subscribe(result =>{
        if(result === "success"){
          this.message = "Deletion is successfull !";
          this.router.navigateByUrl('/super-admin-pannel/(pannel:blank)').then(next =>{
            this.router.navigateByUrl('/super-admin-pannel/(pannel:advertisements)');
          })
        }
        else{
          this.message = "Sorry ! Something went wrong !";
        }
      }),
      error =>{
        this.message = "Sorry ! Something went wrong !";
      }
    }
  });
} */

//advertisement
saveCategory(){
  
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

  uploadImage(event){
    this.advertisement.advertisement = event.target.files[0];
    this.advertisement.advertisementUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+this.advertisement.advertisement);
  }
  save(){
    this.advertisement.category = this.selectedAdCategories[0];

    this.superAdminService.saveAdvertisement(this.advertisement).subscribe(result =>{
      if(result == "success"){
        this.message = "Category is saved successfully ! Refresh the page."; 
        this.router.navigateByUrl('/super-admin-pannel/(pannel:blank)').then(next =>{
          this.router.navigateByUrl('/super-admin-pannel/(pannel:advertisements)');
        })
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
  selectName(id: number){
    this.advertisementCategories.forEach(category => {
      if(category.id === id){
        this.updateCategory = category;
      }
    });
  } 

  updateCategoryName(){
    this.superAdminService.saveAdvertisementCategory(this.updateCategory).subscribe(result =>{
      if(result === "success"){
        this.message = "Category is updated successfully.";
      }
      else{
        this.message = "Sorry, Something went wrong !";
      }
    },
    error =>{
      this.message = "Sorry, Something went wrong !";
    })
  }

}
