import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
