import { Component } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent  {

  employees : Employee[] = [];


  empToEdit? : Employee;
  columnsToDisplay = ['name', 'surname', 'employeeNumber', 'manager', 'position', 'button'];

  constructor(private emplyeeService: EmployeeService) { 
    
  }

  ngOnInit() : void {
    this.emplyeeService
    .getPermission()
    .subscribe((result: Employee[])=> (this.employees = result));
  }

  editEmp(emp: Employee){
    
    this.empToEdit = emp;
  }

  receiveMessage($event: any) {
    console.log("Received")
    this.ngOnInit()
  }

 
}
