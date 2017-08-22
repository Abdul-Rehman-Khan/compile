import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


export const router: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
     path:'login',
    component:LoginPageComponent
  },
  {

    path :'dashboard',
    canActivate:[AuthGuard],
    component:DashboardComponent

  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(router);