import { NgModule , ViewChild} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { EmployeeHierarchyComponent } from './components/employee-hierarchy/employee-hierarchy.component';
import { DropDownListModule, ComboBoxModule, AutoCompleteModule, MultiSelectModule, ListBoxModule, DropDownTreeModule, MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import{TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { FilterTableComponent } from './filter-table/filter-table.component';


import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';


//import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    EditEmployeeComponent,
    HeaderComponent,
    routingComponents,
    EmployeeHierarchyComponent,
    EmployeeTableComponent,
    FilterTableComponent,
    LoginComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    DropDownListModule, ComboBoxModule, AutoCompleteModule, MultiSelectModule, ListBoxModule, DropDownTreeModule, MentionModule,
    MatInputModule, MatTreeModule ,TreeGridModule,DropDownListAllModule,ButtonModule
    
  ],
  providers: [PageService,
    SortService,
    FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
