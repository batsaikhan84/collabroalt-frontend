import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title: String = "Intro to Pipes"
  dateValue = new Date()
  jsonValue = { name: 'Json Object', type: 'It is Json object'}
  celsius = 0
  fahrenheit = 0

  name = "Jon"

  constructor() { }

  ngOnInit(): void {
  }

}
