import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-random-pictures',
  templateUrl: './random-pictures.component.html',
  styleUrls: ['./random-pictures.component.css']
})
export class RandomPicturesComponent implements OnInit {
  url: string = "https://api.unsplash.com/search/photos?query=chicago&client_id=kan8c_FKJC4jtnlAy7zWSD_HtfwxjmwaHPi56Xpv1PU"
  picturesList = []

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.fetchPictures()
  }
  onFetchPictures() {
    this.fetchPictures()
  }
  private fetchPictures() {
    this.http.get(this.url).
    pipe(map(responseData => console.log(responseData.results)))
      .subscribe()
  }
}
