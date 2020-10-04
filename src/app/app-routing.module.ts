import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo : "home", pathMatch: 'full'},
  {path : "home", 
  component : HomeComponent,
  children : [
    {path : "signup", component : SignupComponent},
    {path : "login", component : LoginComponent},
    {path: "users", component: UsersComponent},
    {path : "", component : LoginComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
