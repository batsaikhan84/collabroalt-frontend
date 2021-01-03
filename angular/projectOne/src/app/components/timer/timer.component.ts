import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  count = 0
  isTimerOn = false
  private timerSubscription: any
  constructor() { 
  }
  ngOnInit(): void {
  }
  incrementCount() {
      this.count++
  }
  decrementCount() {
    this.count--
  }
  resetTimer() {
    this.count = 0
  }
  startTimer() {
    if (!this.isTimerOn) {
      this.timerSubscription = interval(1000).subscribe( () => this.incrementCount())
      this.isTimerOn = true
    }
  }
  stopTimer() {
    this.ngOnDestroy()
    this.isTimerOn = false
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe()
  }
}
