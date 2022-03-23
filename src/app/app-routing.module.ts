import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",

  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    //loadChildren: () => import('../app/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    component: SigninComponent,
    //loadChildren: () => import('../app/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    component: ForgetpasswordComponent,
    //loadChildren: () => import('../app/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path:'feedback',
    component: FeedbackpageComponent
  },
  {
    path:'navbar',
    component: NavbarComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
