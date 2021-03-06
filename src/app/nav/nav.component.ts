import { UserAvatar } from './../UserAvatar.model';
import { SearchbarService } from './../Services/searchbar.service';
import { SuperAdminService } from './../SuperAdminPannel/super-admin.service';
import { UserTransferService } from './../Services/user-transfer.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UsersService } from './../Services/users.service';
import { LogoutService } from './../logout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  previousPass: string;
  newPass: string;
  newPassAgain: string;
  message: string;
  logoutService: LogoutService;
  router: Router;
  userService: UsersService;
  user: User = new User();
  notifications: Notification[] = [];
  users: User[] = [];
  imageUrl: any;
  domSanitizer: DomSanitizer;
  userTransferService: UserTransferService;
  superAdminService: SuperAdminService;
  searchbarService: SearchbarService;


  constructor(searchbarService: SearchbarService, logoutService: LogoutService, router: Router, userService: UsersService, domSanitizer: DomSanitizer, userTransferService: UserTransferService, superAdminService: SuperAdminService) {
    this.logoutService = logoutService;
    this.router = router;
    this.userService = userService;
    this.domSanitizer = domSanitizer;
    this.userTransferService = userTransferService;
    this.superAdminService = superAdminService;
    this.searchbarService = searchbarService;
   }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('username')).subscribe(result =>{
      this.user = result;
      localStorage.setItem("name", this.user.name);
      localStorage.setItem('userId', this.user.userId.toString());
      let image = 'data:image/png;base64, '+this.user.userAvatar.image;
      this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(image);
      
    })
    this.superAdminService.getNotifications().subscribe(result =>{
        this.notifications = result;
    })
    setInterval(()=>{
      this.superAdminService.getNotifications().subscribe(result =>{
        this.notifications = result;
    })
    },60000);
  }
  logout(){
    this.logoutService.doLogout().subscribe(
      result=>{
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('role');
      })
      localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('role');
        this.router.navigateByUrl('/Dacicil/(nav:refresh)').then(()=>{
        this.router.navigateByUrl('/Dacicil');
      })
    } 

    routeProfile(){
      if(localStorage.getItem('role') === 'doctor'){
        this.router.navigateByUrl('/profile/(profile-form:doctor-profile)');
      }
      else{
        this.router.navigateByUrl('/profile/(profile-form:user-profile)');
      }
      
    }
    seeDashboard(){
      //this.userTransferService.number = localStorage.getItem("username");
      if(localStorage.getItem('role')==='admin'){
        this.router.navigateByUrl('/super-admin-pannel/(pannel:dashboard)'); 
      }
    }

    myAppoinments(){
      this.router.navigateByUrl('/my-appoinments');
    }

    getDoctorList(){
      this.router.navigateByUrl('/admin-pannel/(users:doctors)');
    }
    getPatientList(){
      this.router.navigateByUrl("/admin-pannel/(users:patients)");
    }
    getSupermanList(){
      this.router.navigateByUrl('/admin-pannel/(users:supermen)');
    }
    changePassword(){
      console.log(this.previousPass);
      console.log(this.newPass);
        if(this.newPass === this.newPassAgain){
            this.superAdminService.changePassword(this.previousPass, this.newPass).subscribe(result =>{
              if(result === "success"){
                this.message = "Password is changed successfully !";
              }
            },
            error =>{
              this.message = "Soory ! Something went wrong !";
            }
            )
        }
        else{
          this.message = "Passwords did not match."
        }
    }
    onSearchChange(event){
      let keyWord = event.target.value;
      if(keyWord.length != 0){
        this.searchbarService.searchDoctors(keyWord).subscribe(result =>{
          this.users = [];
          this.users = result;
        })
      }
      else{
        this.users = [];
        setTimeout(() => {
          this.users = [];
        }, 3500);        
  }
}
userDetails(number : string){
  window.open("/user-details/"+number,"_blank"); 
}
}
