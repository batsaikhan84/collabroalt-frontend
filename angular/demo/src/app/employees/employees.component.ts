import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title = "Employee List"
  
  employees = [
    {id: 101, name: "Jon Snow", email: "snow@email.com", isActive: true, department: 'marketing', hireDate: "1/25/2018", annualSalary: "80000"},
    {id: 102, name: "Kim Uh", email: "uh@email.com", isActive: true, department: 'accounting', hireDate: "1/19/2011", annualSalary: "85000"},
    {id: 103, name: "Sara Romo", email: "romo@email.com", isActive: false, department: 'IT', hireDate: "6/2/2015", annualSalary: "75000"},
    {id: 104, name: "Rob Thomas", email: "thomas@email.com", isActive: false, department: 'R&D', hireDate: "4/29/2008", annualSalary: "90000"}
  ]
  columnNames = this.employees[0]
  constructor() { }

  ngOnInit(): void {
  }
  toggleActive (employee: any) {
      if (employee.isActive === true) {
        employee.isActive = false
      } else if (employee.isActive === false) {
        employee.isActive = true
      }
  }
  buttonClass(employee: any) {
    if (employee.isActive === true) {
      return 'active-button'
    } else {
      return 'inActive-button'
    }
  }
  // employeeKeys() {
  //   this.employees[0].map(employee => {

  //   })
  // }
}
