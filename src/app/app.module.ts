import { appRoutes } from './app.routes';
import { StorageService } from './storage.service';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { ChartsModule } from 'ng2-charts';
import Chart from 'chart.js';
// import {appRoutes} from './app.routes';
//import swal from 'swal';

//import { UserComponent } from './user/user.component';
//import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    FooterComponent,

    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,ChartsModule,
    appRoutes
  ],
  providers: [UserService,AuthGuard,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
