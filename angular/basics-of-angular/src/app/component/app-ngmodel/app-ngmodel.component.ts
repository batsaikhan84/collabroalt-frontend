import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-ngmodel',
  templateUrl: './app-ngmodel.component.html',
  styleUrls: ['./app-ngmodel.component.css']
})
export class AppNgmodelComponent implements OnInit {

  constructor() { }
  value: String = "";
  // writeText(value: String) {
  //   this.value = value
  // }
  clearText() {
    this.value = ""
  }
  ngOnInit(): void {
  }

}
