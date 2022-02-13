import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, SigninComponent, ForgetpasswordComponent, FeedbackpageComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
