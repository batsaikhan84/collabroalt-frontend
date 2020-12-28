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
      { name: "Douglas Pacee"},
      { name: "Mark Miller"},
      { name: "Day Meyers"},
      { name: "Auirre Ellis"},
      { name: "Tim Coook"}
    ]
    this.peopleByCountry = [
      { country: 'US', people: [ { name: "Douglas Pacee"}, { name: "Day Meyers"} ] },
      { country: 'CA', people: [ { name: "Auirre Ellis"}, { name: "Mark Miller"} ] },
    ]
  }

  ngOnInit(): void {
  }

}
