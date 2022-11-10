import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';
import {DataManager, WebApiAdaptor, Query} from '@syncfusion/ej2-data';
import { environment } from 'src/environments/environment';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {

  employees : Employee[] = [];
  empToEdit? : Employee;
  selected = 'option2';
  private urll = "Employee";
  @ViewChild('employee')
  public employeeObj!: DropDownListComponent;

  public remoteData: DataManager = new DataManager({
    //url:`${environment.apiUrl}/${this.urll}/all`,

    url: 'https://localhost:7231/api/Employee/all',
    adaptor: new WebApiAdaptor,

    crossDomain: true 
  });
  public dataFields: Object = {text: 'name' , value: 'employeeNumber', image: 'image'};
  public dataQuery: Query = new Query().select([ 'name', 'employeeNumber', 'image' ]);

  constructor(private emplyeeService: EmployeeService, private dataService : DataService) { }

  ngOnInit(): void {
    this.emplyeeService
    .getEmployees()
    .subscribe((result: Employee[])=> (this.employees = result));
  }

}
