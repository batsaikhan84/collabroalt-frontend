import { Component, OnInit } from '@angular/core';
import { Employee } from "./Employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Array<Employee>
  constructor() {   
    this.employeeList = [
    {
      id: 101,
      name: "Jon Snow",
      email: "snow@email.com",
      isActive: true
    },
    {
      id: 102,
      name: "Jim Smith",
      email: "smith@email.com",
      isActive: true
    },
    {
      id: 103,
      name: "Kay Lee",
      email: "lee@email.com",
      isActive: false
    }
  ]}
  ngOnInit(): void {
  }
}
