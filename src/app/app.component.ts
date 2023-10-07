import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
      this.getEmployees();
  }
  title = 'Employees Management App';
  public employees : Employee[]|undefined;
  constructor(private employeeService: EmployeeService){
  }



  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      { 
        next: (response) => {
          this.employees = response;
        },
        error:(error) => {
          alert(error.message);
        }
      }
    )
  }
}
