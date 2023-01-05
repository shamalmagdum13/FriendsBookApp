import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material-module/angular-material.module';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { UserService } from './services/user.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    RegistrationComponent,
    LoginComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ProfileComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
