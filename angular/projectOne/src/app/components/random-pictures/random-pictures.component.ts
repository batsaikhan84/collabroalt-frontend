import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-random-pictures',
  templateUrl: './random-pictures.component.html',
  styleUrls: ['./random-pictures.component.css']
})
export class RandomPicturesComponent implements OnInit {
  queryValue: string = "chicago"
  url: string = `https://api.unsplash.com/search/photos?query=${this.queryValue}&client_id=kan8c_FKJC4jtnlAy7zWSD_HtfwxjmwaHPi56Xpv1PU`
  loadedRandomPictures: any[] = []
  isLoading = false
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    const customObservable = new Observable(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        count++
      }, 1000)
    })
  }
  getFormInput($event: any): any {
    this.queryValue = $event.target.value
  }
  onFetchPictures() {
    this.fetchPictures()
  }
  private fetchPictures() {
    this.isLoading = true
    this.http.get<any>(this.url)
    .pipe(map(response => {
      const responseArr = []
      let i = 0
      while (i < 3) {
        responseArr.push(response.results[Math.floor(Math.random() * (response.results.length))].urls.raw)
        i++
      }
      return responseArr
    }))
    .subscribe(data => {
      this.isLoading = false;
      this.loadedRandomPictures = data;
    })
  }
}
