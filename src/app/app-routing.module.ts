import { PrescriptionHistoryComponent } from './prescription-history/prescription-history.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import { MyAppoinmentsComponent } from './my-appoinments/my-appoinments.component';
import { DoctorAppoinmentSlotComponent } from './doctor-appoinment-slot/doctor-appoinment-slot.component';
import { DoctorChamberListComponent } from './doctor-chamber-list/doctor-chamber-list.component';
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
    {path: "update-slots", component: UpdateSlotsComponent, outlet: 'details'},
    {path: "doctor-appoinment-slot/:id", component: DoctorAppoinmentSlotComponent, outlet: 'details'}
  ]
},

{path: "doctor-chamber-list/:id", component: DoctorChamberListComponent,
  children: [
    {path: "", component : NavComponent, outlet: 'nav'}
  ]
},

{path: "doctor-appoinment-slot/:id", component: DoctorAppoinmentSlotComponent,
  children: [
    {path: "", component : NavComponent, outlet: 'nav'}
  ]
},

{path: "my-appoinments", component: MyAppoinmentsComponent,
  children: [
    {path: "", component : NavComponent, outlet: 'nav'}
  ]
},

{path: "patient-list/:id", component: AppoinmentListComponent,
  children: [
    {path: "", component : NavComponent, outlet: 'nav'},
    {path: "", component : BlankComponent, outlet: 'prescription'},
    {path: "", component : BlankComponent, outlet: 'history'},
    {path: "prescription-form", component: PrescriptionFormComponent, outlet: 'prescription'},
    {path: "prescription-history", component : PrescriptionHistoryComponent, outlet: 'history'},
    {path: "blank", component: BlankComponent, outlet: 'prescription'},
    {path: "blank", component: BlankComponent, outlet: 'history'}
  ]
},




  
]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
