import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private employees: Employee[];

  cols: any[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();

    this.cols = [
      { field: 'id', header: '#' },
      { field: 'name', header: 'Name' },
      { field: 'username', header: 'Username' },
      { field: 'pviname', header: 'Pviname' },
      { field: 'email', header: 'Email' },
      { field: 'title', header: 'Title' },
      { field: 'extension', header: 'Extension' },
      { field: 'manager', header: 'Manager' },
    ];
  }

  getAllEmployees() {
    this.employeeService.findAll().subscribe(
      employees => {
        this.employees = employees;
      },
      err => {
        console.log(err);
      }
 
    );
  }

}
