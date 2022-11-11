import { Component } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.css']
})
export class TeamManagerComponent{

  title = 'EmployeeHierarchy';
  employees : Employee[] = [];
  empToEdit? : Employee;
  columnsToDisplay = ['name', 'surname', 'employeeNumber', 'manager', 'position', 'button'];

  constructor(private emplyeeService: EmployeeService) {}

  ngOnInit() : void {
    this.emplyeeService
    .getChildren("0001")
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
 
  
  getChildren(user: string)
  {
    
  }
}
