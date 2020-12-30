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

  constructor() { }

  ngOnInit(): void {
  }

}
