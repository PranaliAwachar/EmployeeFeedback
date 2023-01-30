// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import {DataTablesModule} from 'angular-datatables';  
import { EmployeeListComponent } from './Employee-list/Employee-list.component';  
import { AddEmployeeComponent } from './add-Employee/add-Employee.component'; 

@NgModule({  
  declarations: [  
    AppComponent,  
    EmployeeListComponent,  
    AddEmployeeComponent,  
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  
