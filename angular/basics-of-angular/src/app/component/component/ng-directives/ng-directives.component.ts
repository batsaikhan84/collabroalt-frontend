import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent implements OnInit {
  people: any[]
  peopleByCountry: any[]
  constructor() { 
    this.people = [
      { name: "Douglas Pacee", age: 23},
      { name: "Mark Miller", age: 33},
      { name: "Day Meyers", age: 38},
      { name: "Auirre Ellis", age: 65},
      { name: "Tim Coook", age: 65}
    ]
    this.peopleByCountry = [
      { country: 'US', people: [ { name: "Douglas Pacee"}, { name: "Day Meyers"} ] },
      { country: 'CA', people: [ { name: "Auirre Ellis"}, { name: "Mark Miller"} ] },
    ]
  }

  ngOnInit(): void {
  }

}
