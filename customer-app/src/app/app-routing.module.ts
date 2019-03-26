import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './trackomojo/trackomojo.module#TrackomojoModule'
  },
  {
    path: 'customer',
    loadChildren: './customers/customers.module#CustomersModule'
  }
  //,
  // {
  //   path: '',
  //   redirectTo: 'trackomojo',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
