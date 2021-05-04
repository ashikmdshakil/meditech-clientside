import { AddressBook } from './../../AddressBook.model';
import { SuperAdminService } from './../super-admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Categories } from './../../Model/Categories.model';
import { CategoryService } from './../../Services/category.service';
import { User } from './../../User.model';
import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';

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
  domSanitizer: DomSanitizer;
  router: Router;
  aRoute: ActivatedRoute;
  user: User = new User();
  addressBook: AddressBook = new AddressBook();
  categories: any = [];
  currentCategories: Categories[] = [];
  message: string; 
  todaysAppoinments: number;
  completeAppoinments: number;
  totalIncome: number;
  countUsers: number;
  countDoctors: number;
  isImage: boolean = false;
  isDoctor: boolean = false;
  isUser: boolean = false;
  isSuperman: boolean = false;

  constructor(userService: UsersService, categoryService: CategoryService, domSanitizer: DomSanitizer, router: Router, superAdminService: SuperAdminService, aRoute: ActivatedRoute) {
    this.userSevice = userService;
    this.categoryService = categoryService;
    this.domSanitizer = domSanitizer;
    this.router = router;
    this.superAdminService = superAdminService;
    this.aRoute = aRoute;
   }

  ngOnInit(): void {
    this.aRoute.params.subscribe(param =>{
      this.number = param.id;
    })
    this.userSevice.getUserById(this.number).subscribe(result =>{
      this.user = result;
      if(this.user.roles.name==='doctor'){
          this.isDoctor = true;
      }
      if(this.user.roles.name==='patient'){
        this.isUser = true;
    }
    if(this.user.roles.name==='super_admin'){
      this.isSuperman = true;
    }
      if(this.user.addressBooks !== null){
        this.addressBook = this.user.addressBooks;
      }
      if(this.user.categories !== null){
        this.currentCategories = this.user.categories;
      } 
      if(this.user.userAvatar !== null){
        this.user.userAvatar.image = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+this.user.userAvatar.image);
        this.isImage = true;
      } 
    })
        this.superAdminService.getDoctorBasicInfo(this.number.toString()).subscribe(result =>{
          this.todaysAppoinments = result['todaysAppoinments'];
          this.completeAppoinments = result['completeAppoinments'];
          this.totalIncome = result['totalIncome'];
      })

      this.superAdminService.getUserBasicInfo(this.number.toString()).subscribe(result =>{
        this.todaysAppoinments = result['todaysAppoinments'];
        this.completeAppoinments = result['completeAppoinments'];
    })

    this.superAdminService.getSupermanBasicInfo(this.number.toString()).subscribe(result =>{
      this.completeAppoinments = result['completeAppoinments'];
      this.countUsers = result['countUsers'];
      this.countDoctors = result['countDoctors'];
      this.totalIncome = result['totalIncome'];
  })
      
    this.categoryService.getCategories().subscribe(result =>{
      this.categories = result;
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

}
