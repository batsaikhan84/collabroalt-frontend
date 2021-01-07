import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormBuilder } from '@angular/forms'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  form: FormGroup;
  comment
  name
  

  constructor() { }

  ngOnInit(): void {
  }

}
