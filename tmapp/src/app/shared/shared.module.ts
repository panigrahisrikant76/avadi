import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent]
})
export class SharedModule { }
