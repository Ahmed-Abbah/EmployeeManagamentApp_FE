import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServiceUrl="http://localhost:9999";

  constructor(private http : HttpClient) {}

  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:9999/employee/all") ;
  }
  

  public addEmployees(employee : Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServiceUrl}/employee/add`,employee) ;
  }

  public updateEmployees(employee : Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServiceUrl}/employee/update`,employee) ;
  }

  public deleteEmployees(employeeId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/employee/delete/${employeeId}`) ;
  }
}
