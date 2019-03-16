import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import {AdminHeaderComponent} from '../shared/admin-header/admin-header.component';
import {AdminFooterComponent} from '../shared/admin-footer/admin-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [LoginComponent,AdminHeaderComponent, AdminFooterComponent,DashboardComponent, ProfileComponent]
})
export class AdminModule { }
