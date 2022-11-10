import { Component, ViewChild,ElementRef } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';


export interface TreeNode {
  id? : number ;
  employeeNumber? : number ;
  salary? : number;
  permissionRank? : number;
  manager? : number; 
  name? : string;
  surname? : string;
  birthDate? : string;
  position? : string; 
  children : TreeNode[];
}


@Component({
  selector: 'app-employee-hierarchy',
  templateUrl: './employee-hierarchy.component.html',
  styleUrls: ['./employee-hierarchy.component.css']
})
export class EmployeeHierarchyComponent {

  title = 'EmployeeHierarchy';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];



  empToEdit? : Employee;
  columnsToDisplay = ['name', 'surname', 'employeeNumber', 'manager', 'position', 'button'];


  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>()
  
  constructor(private emplyeeService: EmployeeService) {
    let root = [emplyeeService.root];
    this.dataSource.data = root;
  }


  
  ngOnInit() : void {
    let root = [this.emplyeeService.root];
    this.dataSource.data = root;
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;


}





