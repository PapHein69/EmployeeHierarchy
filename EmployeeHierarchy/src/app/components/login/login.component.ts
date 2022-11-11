import { Component ,ViewChild} from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import {DataManager, WebApiAdaptor, Query} from '@syncfusion/ej2-data';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'EmployeeHierarchy';
  
  public remoteData: DataManager = new DataManager({
    //url:`${environment.apiUrl}/${this.urll}/all`,

    url: 'https://localhost:7231/api/Employee/all',
    adaptor: new WebApiAdaptor,

    crossDomain: true 
  });
  public dataFields: Object = {text: 'name' , value: 'employeeNumber'};
  public dataQuery: Query = new Query().select([ 'name', 'employeeNumber']);

  constructor(private emplyeeService: EmployeeService) {}

 
  @ViewChild('employee')
  public employeeObj!: DropDownListComponent;


  public onEmployeeChange(){
    this.emplyeeService.setCurrUser(this.employeeObj.value.toString());
  }

  
}
