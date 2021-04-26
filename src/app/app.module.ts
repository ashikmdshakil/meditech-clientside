import { ChamberServiceService } from './Services/chamber-service.service';
import { RegistrationService } from './registration.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpErrorResponse } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { from } from 'rxjs';
import { UsersComponent } from './users/users.component';
import { RoleComponent } from './role/role.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CategoryComponent } from './category/category.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorCategoryComponent } from './doctor-category/doctor-category.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorChamberComponent } from './doctor-chamber/doctor-chamber.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { UpdateChamberComponent } from './update-chamber/update-chamber.component';
import { UpdateSlotsComponent } from './update-slots/update-slots.component';
import { DoctorChamberListComponent } from './doctor-chamber-list/doctor-chamber-list.component';
import { DoctorAppoinmentSlotComponent } from './doctor-appoinment-slot/doctor-appoinment-slot.component';
import { MyAppoinmentsComponent } from './my-appoinments/my-appoinments.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { PrescriptionHistoryComponent } from './prescription-history/prescription-history.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { RegisterSupermanComponent } from './register-superman/register-superman.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SupermenComponent } from './supermen/supermen.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PrescriptionFormFullComponent } from './prescription-form-full/prescription-form-full.component';
import { SuperAdminDashboardComponent } from './SuperAdminPannel/super-admin-dashboard/super-admin-dashboard.component';
import { RegisterComponent } from './SuperAdminPannel/register/register.component';
import { DashboardComponent } from './SuperAdminPannel/dashboard/dashboard.component';
import { AppoinmentsComponent } from './SuperAdminPannel/appoinments/appoinments.component';
import { SupermanListComponent } from './SuperAdminPannel/superman-list/superman-list.component';
import { PatientAllComponent } from './SuperAdminPannel/patient-all/patient-all.component';
import { DoctorAllComponent } from './SuperAdminPannel/doctor-all/doctor-all.component';
import { CategoriesComponent } from './SuperAdminPannel/categories/categories.component';
import { AdvertisementComponent } from './SuperAdminPannel/advertisement/advertisement.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    NavComponent,
    LoginComponent,
    UsersComponent,
    RoleComponent,
    AdminPannelComponent,
    ConfirmComponent,
    BlankComponent,
    SearchComponent,
    ProfileComponent,
    ProfileFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CategoryComponent,
    RegisterDoctorComponent,
    DoctorDashboardComponent,
    DoctorProfileComponent,
    DoctorCategoryComponent,
    DoctorListComponent,
    DoctorChamberComponent,
    DoctorDetailsComponent,
    UpdateChamberComponent,
    UpdateSlotsComponent,
    DoctorChamberListComponent,
    DoctorAppoinmentSlotComponent,
    MyAppoinmentsComponent,
    AppoinmentListComponent,
    PrescriptionFormComponent,
    PrescriptionHistoryComponent,
    RegisterPatientComponent,
    RegisterSupermanComponent,
    PatientsComponent,
    DoctorsComponent,
    SupermenComponent,
    SearchbarComponent,
    PrescriptionFormFullComponent,
    SuperAdminDashboardComponent,
    RegisterComponent,
    DashboardComponent,
    AppoinmentsComponent,
    SupermanListComponent,
    PatientAllComponent,
    DoctorAllComponent,
    CategoriesComponent,
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegistrationService,
    ChamberServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
