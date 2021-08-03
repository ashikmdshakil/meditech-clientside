import { AddressBook } from './../../AddressBook.model';
import { SuperAdminService } from './../super-admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Categories } from './../../Model/Categories.model';
import { CategoryService } from './../../Services/category.service';
import { User } from './../../User.model';
import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { UserAvatar } from 'src/app/UserAvatar.model';
import { UserAvatarService } from 'src/app/Services/user-avatar.service';
import { Degree } from 'src/app/Model/Degree.model';
import { Speciality } from 'src/app/Model/Speciality.model';
 
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  number: string;
  userSevice: UsersService;
  categoryService: CategoryService;
  superAdminService: SuperAdminService;
  userAvatarService: UserAvatarService;
  domSanitizer: DomSanitizer;
  router: Router;
  aRoute: ActivatedRoute;
  user: User = new User();
  superman: User = new User();
  userAvatar: UserAvatar = new UserAvatar();
  addressBook: AddressBook = new AddressBook();
  degree: Degree = new Degree();
  specialities: Speciality = new Speciality();
  categories: Categories[] = [];
  currentCategories: Categories[] = [];
  message: string; 
  isImage: boolean = false;
  isDoctor: boolean = false;
  isUser: boolean = false;
  isSuperman: boolean = false;
  isDiagnostic: boolean = false;
  imageUrl: any;
  diagnosticTotalIncome: any;
  diagnosticCOmpleteTest: any;
  diagnosticTodaysBooking: any;
  diagnosticTotalBooking: any;
  diagnosticTotalBalance: any;


  constructor(userAvatarService: UserAvatarService, userService: UsersService, categoryService: CategoryService, domSanitizer: DomSanitizer, router: Router, superAdminService: SuperAdminService, aRoute: ActivatedRoute) {
    this.userSevice = userService;
    this.categoryService = categoryService;
    this.domSanitizer = domSanitizer;
    this.router = router;
    this.superAdminService = superAdminService;
    this.aRoute = aRoute;
    this.userAvatarService = userAvatarService;
   }

  ngOnInit(): void {
    this.aRoute.params.subscribe(param =>{
      this.number = param.id;
    })
    this.userSevice.getUserById(this.number).subscribe(result =>{
      //console.log(result);
      this.user = result;
      //this.addressBook = this.user.addressBooks;
      if(this.user.roles.name==='doctor'){
          this.isDoctor = true;
          this.getDoctorBasicInfos();
      }
      else if(this.user.roles.name==='patient'){
        this.isUser = true;
        this.getUserBasicInfo();
        if(this.user.adminNumber !== null){
            this.userSevice.getUser(this.user.adminNumber).subscribe(result =>{
              this.superman = result;
            })
        }
      }
      else if(this.user.roles.name==='super_admin'){
        this.isSuperman = true;
        this.getSupermanBasicInfo();
      }
      else if(this.user.roles.name==='diagnostic'){
        this.isDiagnostic = true;
        this.getDIagnosticBasicInfo();
      }  

      if(this.user.addressBooks !== null){
        this.addressBook = this.user.addressBooks;
      }
      if(this.user.degree !== null){
        this.degree = this.user.degree;
      } 
      if(this.user.speciality !== null){
        this.specialities = this.user.speciality;
      }
      if(this.user.categories !== null){
        this.currentCategories = this.user.categories;
      } 
      if(this.user.userAvatar !== null){
        this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+this.user.userAvatar.image);
        this.isImage = true;
      } 
    })
    this.categoryService.getCategories().subscribe(result =>{
      this.categories = result;
      console.log(result);
      })   
  }

  getDIagnosticBasicInfo(){
    this.superAdminService.getDiagnosticBasicInfos(this.number.toString()).subscribe(result => {
      this.diagnosticCOmpleteTest = result['completeTest'];
      this.diagnosticTotalIncome = result['totalIncome'];
      this.diagnosticTotalBalance = result['totalBalance'];
      this.diagnosticTotalBooking = result['totalBooking'];
      this.diagnosticTodaysBooking = result['todaysBooking'];
    })
  }

  getDoctorBasicInfos(){
    this.superAdminService.getDoctorBasicInfo(this.number.toString()).subscribe(result =>{
      this.user.todaysAppoinments = result.todaysAppoinments;
      this.user.completeAppoinments = result.completeAppoinments;
      this.user.totalIncome = result.totalIncome;
  })
  }

  getUserBasicInfo(){
    this.superAdminService.getUserBasicInfo(this.number.toString()).subscribe(result =>{
      this.user.todaysAppoinments = result.todaysAppoinments;
      this.user.completeAppoinments = result.completeAppoinments;
  })
  }

  getSupermanBasicInfo(){
    this.superAdminService.getSupermanBasicInfo(this.number.toString()).subscribe(result =>{
      this.user.completeAppoinments = result.completeAppoinments;
      this.user.countUsers = result.countUsers;
      this.user.countDoctors = result.countDoctors;
      this.user.totalIncome = result.totalIncome;
  })
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

  update(){
    this.user.categories = this.currentCategories;
    this.user.addressBooks = this.addressBook;
    this.user.degree = this.degree;
    this.user.speciality = this.specialities;
    this.userSevice.updateUser(this.user).subscribe(result =>{
      if(result =='success'){
        this.message = "Profile is updated successfully !";
        this.router.navigateByUrl('/blank').then(after =>{
          this.router.navigateByUrl('/user-details/'+this.number);
        })
      }
      else{
        this.message = "Sorry ! Something went wrong!";
      }
    },
    error =>{
      this.message = "Sorry ! Something went wrong! It might ba a connection error.";
    }
    )
  }

  close(){
    window.close();
  }

  uploadImage(event){
    if(event.target.files[0]){
      let file: File = event.target.files[0];
      this.userAvatar.image = file;
      this.userAvatar.user = this.user;
      this.userAvatarService.updateImage(this.userAvatar).subscribe(response =>{
          var fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = (event)=>{
          this.imageUrl = fileReader.result;
        } 
      });
}
}

}
