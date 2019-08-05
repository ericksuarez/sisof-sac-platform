import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { HeaderComponent } from './shared/pages/header/header.component';
import { SidebarNavigationComponent } from './shared/pages/sidebar-navigation/sidebar-navigation.component';
import { LoginComponent } from './authentication/pages/login/login.component';
import { ForgotPasswordComponent } from './authentication/pages/forgot-password/forgot-password.component';
import { ClientsComponent } from './dashboard/pages/clients/clients.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { RoutesComponent } from './dashboard/pages/routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarNavigationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ClientsComponent,
    NotFoundComponent,
    HomeComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
