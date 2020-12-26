import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title = "Employee List"
  employees = [
    {id: 101, name: "Jon Snow", email: "snow@email.com", isActive: true},
    {id: 102, name: "Kim Uh", email: "uh@email.com", isActive: true},
    {id: 103, name: "Sara Romo", email: "romo@email.com", isActive: true}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
