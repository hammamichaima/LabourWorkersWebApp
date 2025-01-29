import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import {FormsModule} from "@angular/forms";
import { XyzComponent } from './xyz/xyz.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SupportComponent } from './pages/support/support.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ApplicationFormComponent,
    XyzComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    SupportComponent,
    MessagesComponent,
    ProfileComponent
  ],
    imports: [
       HttpClientModule,
       FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
