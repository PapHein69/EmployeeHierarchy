import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee';

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

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private url = "Employee";
  private currUser ="" ;
  private number =0 ; 
  private employees : any[] = []
  public root : TreeNode = {} as TreeNode

  constructor(private http: HttpClient) {
    let root = {} as TreeNode;
    this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}/all`).forEach((eArr)  =>  {
      eArr.forEach((e)  =>  {
        if(e.employeeNumber == 1) {
          //Set all fields here

          root.name = e.name;
          root.employeeNumber = e.employeeNumber;
          root.manager = e.manager;
          root.children = [];
        }
        this.employees.push(e)
      })
    }).then(()  =>  {

      console.log(this.employees)

      //Recursive function build tree
      this.buildTree(root);
      console.log(root)
      this.root = root
    });
  }

  public buildTree(node : TreeNode) {
    this.employees.forEach((e)  =>  {
      if(e.manager === node.employeeNumber) {
        let newNode = {} as TreeNode;
        //Set all fields here

        newNode.name = e.name;
        newNode.surname = e.surname;
        newNode.employeeNumber = e.employeeNumber;
        newNode.manager = e.manager;
        newNode.children = []
        node.children.push(newNode)
        this.buildTree(newNode)
      }
    })
  }

  public setCurrUser(User : string){
    this.currUser = User ;    
  }

   public setPermission(num :  number){
     this.number = num ;
  }

  public getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}/all`);
  }

  public getEmployeesArr() : Employee[]{
    return this.employees;
  }
  

  public getChildren(ManagerNo : string) : Observable<Employee[]>{
    var m = ManagerNo;

    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}/children?ManagerNo=${this.currUser}`, );
  }

  public getPermission() : Observable<Employee[]>{   
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}/permission?level=${this.number}`, );
  }
  
  public updateEmployees(emp :Employee) : Observable<Employee[]>{
    return this.http.put<Employee[]>(
      `${environment.apiUrl}/${this.url}`, emp)
  }

  public createEmployees(emp :Employee) : Observable<Employee[]>{
    
    return this.http.post<Employee[]>(
      `${environment.apiUrl}/${this.url}`, emp)
  }

  public deleteEmployees(emp :Employee) : Observable<Employee[]>{
    return this.http.delete<Employee[]>(
      `${environment.apiUrl}/${this.url}/${emp.id}`)
  }

}
