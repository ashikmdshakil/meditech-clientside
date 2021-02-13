import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Categories } from '../Model/Categories.model';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-doctor-category',
  templateUrl: './doctor-category.component.html',
  styleUrls: ['./doctor-category.component.css']
})
export class DoctorCategoryComponent implements OnInit {
  categoryService: CategoryService;
  categories: Categories[] = [];
  router: Router;

  constructor(categoryService: CategoryService, router: Router) {
    this.categoryService = categoryService; 
    this.router = router;
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(result =>{
      this.categories = result;
      this.categories.forEach(element => {
        console.log(element.name);
      });
    })
    
  }

  getDoctorList(id: number){
    console.log("this doctor category id is "+id);
    this.router.navigateByUrl('/home/doctor-list',{ state: { id: id }});

  }

}
