import { Component ,ViewChild} from '@angular/core';
import { Employee } from './models/Employee';
import { EmployeeService } from './services/employee.service';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import {DataManager, WebApiAdaptor, Query} from '@syncfusion/ej2-data';
import { Route, Router } from '@angular/router';
import { HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeHierarchy';
  employees : Employee[] = [];
  empToEdit? : Employee;
  columnsToDisplay = ['name', 'surname', 'employeeNumber', 'manager', 'position', 'button'];
  

  public remoteData: DataManager = new DataManager({
    //url:`${environment.apiUrl}/${this.urll}/all`,

    url: 'https://localhost:7231/api/Employee/all',
    adaptor: new WebApiAdaptor,

    crossDomain: true 
  });
  public dataFields: Object = {text: 'name' , value: 'employeeNumber', image: 'image'};
  public dataQuery: Query = new Query().select([ 'name', 'employeeNumber', 'image' ]);

  constructor(private emplyeeService: EmployeeService) {}

  ngOnInit() : void {
    this.emplyeeService
    .getEmployees()
    .subscribe((result: Employee[])=> (this.employees = result));
  }

  updateEmployeeList(emps: Employee[]){
    this.employees = emps ;
  }

  initNewEmp(){
    this.empToEdit = new Employee;
  }
  editEmp(emp: Employee){
    this.empToEdit = emp;
  }
  @ViewChild('employee')
  public employeeObj!: DropDownListComponent;
  public onEmployeeChange(){
    var currUser = this.employeeObj.value;
    this.emplyeeService.setCurrUser(currUser.toString());
  }

  
}
