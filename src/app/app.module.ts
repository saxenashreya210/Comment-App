import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, SignupComponent, SigninComponent, ForgetpasswordComponent, FeedbackpageComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
