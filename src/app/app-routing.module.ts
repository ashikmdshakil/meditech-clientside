import { UpdateChamberComponent } from './update-chamber/update-chamber.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CategoryComponent } from './category/category.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { BlankComponent } from './blank/blank.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { RoleComponent } from './role/role.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorCategoryComponent } from './doctor-category/doctor-category.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorChamberComponent } from './doctor-chamber/doctor-chamber.component';
import { UpdateSlotsComponent } from './update-slots/update-slots.component';

const routes: Routes = [
  {path: "", redirectTo : "home", pathMatch: 'full'},
  {path : "home", 
  component : HomeComponent,
  children : [
    {path: "", component : NavComponent, outlet: 'nav'},
    {path: "refresh", component : BlankComponent, outlet: 'nav'},
    {path : "signup", component : SignupComponent},
    {path : "login", component : LoginComponent},
    {path : "reset-password", component : ForgotPasswordComponent},
    {path : "", component : CategoryComponent},
    {path : "doctor-category", component : DoctorCategoryComponent},
    {path : "doctor-list/:id", component : DoctorListComponent}
  ]
},
{path: "admin-pannel", component: AdminPannelComponent,
    children: [
      {path: "" ,component: UsersComponent},
      {path: "", component : NavComponent, outlet: 'nav'},
      {path: "refresh", component : BlankComponent, outlet: 'nav'},
      {path: "blank", component: BlankComponent, outlet: 'setRole'},
      {path: "blank", component: BlankComponent, outlet: 'setRole'},
      {path: "role", component: RoleComponent, outlet: 'setRole'},
      {path: "confirm", component: ConfirmComponent, outlet: 'setRole'},
      {path: "", component: SearchComponent, outlet: 'search'},
     
    ]
  },
  {path: "admin-pannel/refresh", component: BlankComponent},
  {path: "profile", component: ProfileComponent,
    children: [
      {path: "", component : NavComponent, outlet: 'nav'},
      {path: "refresh", component : BlankComponent, outlet: 'nav'},
      {path: "", component: BlankComponent, outlet: 'profile-form'},
      {path: "user-profile", component: ProfileFormComponent, outlet: 'profile-form'},
      {path: "refresh", component : BlankComponent, outlet: 'profile-form'},
      {path: "doctor-profile", component : DoctorProfileComponent, outlet: 'profile-form'},
    ]
  },
  {path: "reset-password/:name", component: ResetPasswordComponent},
  {path: "register-doctor", component: RegisterDoctorComponent,
  children : [
    {path: "", component : NavComponent, outlet: 'nav'},
  ]
},
  {path: "doctor-dashboard", component: DoctorDashboardComponent,
  children: [
    {path: "", component : NavComponent, outlet: 'nav'},
    {path: "", component: DoctorDetailsComponent, outlet: 'details'},
    {path: "doctor-details", component: DoctorDetailsComponent, outlet: 'details'},
    {path: "doctor-chambers", component: DoctorChamberComponent, outlet: 'details'},
    {path: "update-chambers", component: UpdateChamberComponent, outlet: 'details'},
    {path: "update-slots", component: UpdateSlotsComponent, outlet: 'details'}


  ]
}
  
]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
