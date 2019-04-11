import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerLeftSideComponent } from './customer-left-side/customer-left-side.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';
import { AuthguardGuard } from './authguard.guard';

@NgModule({
  imports: [
    CommonModule,
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomersRoutingModule
  ],
   providers: [AuthguardGuard],
  declarations: [CustomerListComponent, LoginComponent, DashboardComponent, ProfileComponent, CustomerHeaderComponent, CustomerLeftSideComponent, CustomerFooterComponent]
})
export class CustomersModule { }


