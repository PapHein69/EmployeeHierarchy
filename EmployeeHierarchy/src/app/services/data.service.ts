import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public employeeNumber : string = "";

  public employee : Employee = {} as Employee

  constructor() { 
    
  }
}
