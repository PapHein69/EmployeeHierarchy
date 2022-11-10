import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';
import {sampleData} from './datasource';

@Component({
selector: 'app-filter-table',

template: `<br><br><br><h1>Table Filter</h1>
<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' >
<e-columns>
            <e-column field='employeeNumber' headerText='EmployeeNumber' textAlign='Left' width=100></e-column>
            <e-column field='name' headerText='Name' textAlign='Left' width=100></e-column>
            <e-column field='surname' headerText='Surname' textAlign='Left' width=100></e-column>
            <e-column field='position' headerText='Position' textAlign='Left' width=100></e-column>
            <e-column field='manager' headerText='Manager' textAlign='Left' width=100></e-column>
            <e-column field='birthDate' headerText='Birth Day' textAlign='Left' width=100 ></e-column>`


})



export class FilterTableComponent {

    
    constructor(private emplyeeService: EmployeeService) {
        let root = emplyeeService.getEmployeesArr();
        this.data = root ;
      }
      

    public data? : Object[];;
    public filterSettings? : Object ;

ngOnInit(): void {
    this.filterSettings = { ignoreAccent: true };
    
}
}
