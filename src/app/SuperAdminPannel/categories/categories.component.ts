import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Categories } from './../../Model/Categories.model';
import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  id: string;
  message: string;
  superAdminService: SuperAdminService;
  categories: Categories[] = [];
  category: Categories = new Categories();
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
      console.log(result);
      this.categories.forEach(category => {
          category.iconUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+category.icon);
          console.log(category.iconUrl);
      });
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
    this.category.icon = event.target.files[0];
    this.category.iconUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+this.category.icon);
  }
  save(){
    if(this.category.name === '24/7'){
      this.message = "24/7 category can not be updated."; 
    }
    else{
      this.superAdminService.postCategory(this.category).subscribe(result =>{
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
      delete this.category;
      this.category = new Categories();
    }
}

delete(){
  if(this.category.name === '24/7'){
    this.message = "24/7 category can not be deleted."; 
  }
  else{
    this.superAdminService.deleteCategory(this.category).subscribe(result =>{
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
}
}