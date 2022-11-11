import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
//import * as SparkMD5 from 'spark-md5';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
 @Input() emp?: Employee;
 @Output() employeesUpdated = new EventEmitter<Employee[]>();
 public hash?: string;
 
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  updateEmployee(emp: Employee){
    if(emp.manager == emp.employeeNumber){
      alert("Employee Manager and Clock number cannot be the same")
    }
    else{
      this.employeeService
      .updateEmployees(emp)
      .subscribe((emps: Employee[]) => this.employeesUpdated.emit(emps))
    }
  }
  deleteEmployee(emp: Employee){
    this.employeeService
      .deleteEmployees(emp)
      .subscribe((emps: Employee[]) => this.employeesUpdated.emit(emps))

  }
  createEmployee(emp: Employee){
    if(emp.manager == emp.employeeNumber){
      alert("Employee Manager and Clock number cannot be the same")
    }
    else{

      this.employeeService
      .createEmployees(emp)
      .subscribe((emps: Employee[]) => this.employeesUpdated.emit(emps))
      //this.hash = SparkMD5.hash(emp.name+ emp.birthDate);
    }

  }

  createGravatar(Hash: string) {
    //this.avatar = 'https://www.gravatar.com/avatar/' + Hash + '?d=identicon';
  }

  uploadImage(){
    alert("Currentley Unavailable");
  }
  

}
