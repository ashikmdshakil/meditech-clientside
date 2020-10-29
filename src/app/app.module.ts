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
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
