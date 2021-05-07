import { RegistrationService } from 'src/app/registration.service';
import { Speciality } from './../../Model/Speciality.model';
import { CategoryService } from './../../Services/category.service';
import { AddressBook } from './../../AddressBook.model';
import { UserAvatar } from './../../UserAvatar.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';
import { Categories } from 'src/app/Model/Categories.model';
import { Degree } from 'src/app/Model/Degree.model';

@Component({
  selector: 'app-doctor-all',
  templateUrl: './doctor-all.component.html',
  styleUrls: ['./doctor-all.component.css']
})
export class DoctorAllComponent implements OnInit {
  imageUrl: any;
  message: string;
  superAdminService: SuperAdminService;
  doctors: User[] = [];

  user: User = new User();
  addressBook: AddressBook = new AddressBook();
  degree: Degree = new Degree();
  speciality: Speciality = new Speciality();
  categories: Categories[] = [];
  currentCategories: Categories[] = [];
  categoryService: CategoryService;
  registrationService: RegistrationService;

  selectedDoctor: User = new User();
  selectedUserAvatar: UserAvatar = new UserAvatar();
  domSanitizer: DomSanitizer;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer, categoryService: CategoryService,  registrationService: RegistrationService) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
    this.categoryService = categoryService;
    this.registrationService = registrationService;
   }
 
  ngOnInit(): void {
    this.superAdminService.getDoctors().subscribe(result =>{
      this.doctors = result;
    })
    this.categoryService.getCategories().subscribe(result =>{
      this.categories = result;
      })
  }

  userInfo(number: string){
    this.doctors.forEach(doctor => {
        if(doctor.mobileNumber === number){
          this.selectedDoctor = null;
          this.selectedDoctor = doctor;
        }
    });
  }

  userDetails(number : string){
    window.open("/user-details/"+number,"_blank");
  }

  archiveUser(){
    this.message = null;
    this.superAdminService.deleteUser(this.selectedDoctor).subscribe(result =>{
      if(result === "archived"){
        this.message = "This user has been removed.";
      }
      else if(result === "activated"){
        this.message = "This user has been activated again!";
      }
      else if(result === "failed"){
        this.message = "Sorry Something went wrong.";
      }
    },
    error =>{
      this.message = "Sorry something went wrong. It might be connection problem with server.";
    }
    )
  }

  updateCategory(id, name){
    let category: Categories = new Categories();
    category.id = id;
    category.name = name;
    this.currentCategories.push(category);
  }

  clearCategories(){
    this.currentCategories = [];
  }
  registerUser(){
    this.user.addressBooks = this.addressBook;
    this.user.degree = this.degree;
    this.user.speciality = this.speciality;
    this.user.categories = this.currentCategories;
    this.registrationService.registerDoctorWithDetails(this.user).subscribe(result =>{
      if(result === "success"){
        this.message = "Registration is successfull";
      }
      else{
        this.message = "Sorry ! Something went wrong.";
      }
    }),
    error =>{
      this.message = "Soory! something went wrong. It might be a connection error";
    }
  }
}
 