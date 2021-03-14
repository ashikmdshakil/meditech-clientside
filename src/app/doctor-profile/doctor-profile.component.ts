import { Speciality } from './../Model/Speciality.model';
import { Degree } from './../Model/Degree.model';
import { Categories } from './../Model/Categories.model';
import { CategoryService } from './../Services/category.service';
import { CategoryComponent } from './../category/category.component';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AddressBook } from '../AddressBook.model';
import { UserAvatarService } from '../Services/user-avatar.service';
import { UsersService } from '../Services/users.service';
import { User } from '../User.model';
import { UserAvatar } from '../UserAvatar.model';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  name: string;
  mail: string;
  number: string;
  imageUrl: any;
  imageId: any;
  categories: any = [];
  currentCategories: Categories[] = [];
  isChecked: boolean = false;
  addressBooks: AddressBook = new AddressBook();
  user: User = new User();
  degree: Degree = new Degree();
  speciality: Speciality = new Speciality();
  userAvatar: UserAvatar = new UserAvatar();
  userService: UsersService;
  userAvatarService: UserAvatarService;
  router: Router;
  domSanitizer: DomSanitizer;
  categoryService: CategoryService;

  constructor(userService: UsersService, router: Router, domSanitizer: DomSanitizer, userAvatarService: UserAvatarService, categoryService: CategoryService){ 
    this.userService = userService;
    this.router = router;
    this.domSanitizer = domSanitizer;
    this.userAvatarService = userAvatarService;
    this.categoryService = categoryService;
  }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('username')).subscribe(result =>{
      this.user = result;
      this.name = this.user.name;
      this.mail = this.user.email;
      this.number = this.user.mobileNumber;

      console.log(result);

      if(this.user.addressBooks !== null){
        this.addressBooks = this.user.addressBooks;
      }
        let image = 'data:image/png;base64, '+this.user.userAvatar.image;
        this.imageId = this.user.userAvatar.avatarId;
        this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(image); 

        if(this.user.categories !== null){
          this.currentCategories = result['categories'];
        } 
        
        if(this.user.degree !== null){
          this.degree = result['degree'];
        }

        if(this.user.speciality !== null){
          this.speciality = result['speciality'];
        }
        
        
      }) 

      this.categoryService.getCategories().subscribe(result =>{
        this.categories = result;
        this.categories.forEach(element => {
          console.log(element.name);
        });
      }) 

      
      console.log("Array length is "+this.currentCategories.length);
      if(this.currentCategories == null){
        console.log("this array is null");
      }
      else{
        console.log("This is array is not null.")
      }
      this.currentCategories.forEach(element => {
        console.log("category name is "+element.name);
        
      });


    }
  

  update(){
    if(this.isChecked){
    this.user.addressBooks = this.addressBooks;
    this.user.categories = this.currentCategories;
    this.user.degree = this.degree;
    this.user.speciality = this.speciality;
    console.log(this.user.speciality.speciality);
    //if(this.imageId !== null){
      //this.user.userAvatar.avatarId = this.imageId;
    //}
    this.userService.updateUser(this.user).subscribe(result =>{
        if(result == 'success'){
          this.name = this.user.name;
          this.mail = this.user.email;
          this.number = this.user.mobileNumber;
        }
        this.router.navigateByUrl('/profile/(nav:refresh)').then(()=>{
        if(localStorage.getItem('role') === 'doctor'){
          this.router.navigateByUrl('/profile/(profile-form:doctor-profile)');
        }
        else{
          this.router.navigateByUrl('/profile/(profile-form:user-profile)');
        }
      })
    }); 
  }
  }
  handleChange(event){
    if(event.target.checked){
      this.isChecked = true;
    }
    else{
      this.isChecked = false;
    }
  }
  uploadImage(event){
      if(event.target.files[0]){
        let file: File = event.target.files[0];
        this.userAvatar.image = file;
        this.userAvatar.user = this.user;
        this.userAvatarService.updateImage(this.userAvatar).subscribe(response =>{
          console.log(response);
        });
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event)=>{
          this.imageUrl = fileReader.result;
          console.log(this.imageUrl);
        } 
  }
}
updateCategory(id, name){
  let category: Categories = new Categories();
  category.id = id;
  category.name = name;
  this.currentCategories.push(category);
  this.currentCategories.forEach(element => {
    console.log("current categories are "+element.name);
  });
}

clearCategories(){
  this.currentCategories = [];
}

}
