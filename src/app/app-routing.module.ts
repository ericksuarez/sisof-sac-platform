import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './authentication/pages/login/login.component'
import { ForgotPasswordComponent } from './authentication/pages/forgot-password/forgot-password.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { RoutesComponent } from './dashboard/pages/routes/routes.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent }
  ,{ path: 'logout', component: LoginComponent }
  , { path: 'forgot-password', component: ForgotPasswordComponent }
  , { path: 'dashboard', component: HomeComponent }
  , { path: 'routes', component: RoutesComponent }
  , { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ,BrowserModule
    ,FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
