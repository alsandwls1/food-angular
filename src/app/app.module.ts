import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { FoodListComponent } from './food-list/food-list.component';

//service
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { FileService } from './_services/file.service';
import { HotlistService } from './_services/hotlist.service';
import { RegisterComponent } from './register/register.component';
import { CanivalComponent } from './canival/canival.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TruckListComponent,
    NavTopComponent,
    FoodListComponent,
    RegisterComponent,
    CanivalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticationService,
    UserService,
    FileService,
    HotlistService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
