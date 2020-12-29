import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generatePassword(length: number, passwordHasNumber: boolean, passwordHadLetter: boolean, passwordHasSymbol: boolean): string {
    let password = ""
    const str = "abcdefghijklmnopqrstuvwxyz"
    const upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const num = '0123456789'
    const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
    
    return ""
  }
  randomIndexGenerator(str: string): string {
    return str[Math.floor(Math.random() * str.length)]
  }
}
