import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0
  // constructor() {
  //   this.count;
  // }
  increment() {
    return this.count++
  }
  decrement() {
    return this.count--
  }
  title = 'basics-of-angular';
  firstName: String = 'Jon'
  lastName: String = 'Snow'
  isActive: Boolean = true
  age: number = 36
  printInfo(): String {
    return `This is ${this.firstName}`
  }
}
