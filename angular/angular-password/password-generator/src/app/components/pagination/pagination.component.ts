import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  currentPage: number = 0
  images: Array<any> = []
  constructor() {
    this.images = [
      {
        title: 'Let it snow!!',
        url:
          'https://images.unsplash.com/photo-1609004150882-eb9bbe5beef0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        title: 'Nice Office!',
        url:
          'https://images.unsplash.com/photo-1608745211459-29dac5b0d5ed?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        title: 'Best Gift Ever!!',
        url:
          'https://images.unsplash.com/photo-1608825154649-2e9bb4cd4211?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8UzRNS0xBc0JCNzR8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        title: 'Miss this camera!!',
        url:
          'https://images.unsplash.com/photo-1608010591336-641552845f55?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
    ];
  }
  ngOnInit(): void {
  }
}
