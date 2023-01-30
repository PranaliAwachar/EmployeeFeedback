import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { EmployeeListComponent } from './Employee-list/Employee-list.component';  
import { AddEmployeeComponent } from './add-Employee/add-Employee.component';  
  
const routes: Routes = [  
  { path: '', redirectTo: 'view-Employee', pathMatch: 'full' },  
  { path: 'view-Employee', component: EmployeeListComponent },  
  { path: 'add-Employee', component: AddEmployeeComponent },  
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  