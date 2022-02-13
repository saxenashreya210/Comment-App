import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-up",
    pathMatch: "full",

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
  }
  // {
  //   path:'',
  //   component:SignUpPageModule,
  //   children: [
  //     { path: 'signin', component: SignInPageModule }
  //   ]
  // },
  
  // {
  //   path: 'signin',
  //   component: SignInPageModule 
  // }
  // ,
  // {
  //   path: "sign-in",
  //   loadChildren: () =>
  //     import("../app/sign-in/sign-in.module").then((m) => m.SignInPageModule),
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
