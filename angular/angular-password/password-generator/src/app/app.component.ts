import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberCheckBox = true;
  lowerCaseCheckBox = true
  upperCaseChckeBox = true
  symbolCheckBox = true
  generatePassword(passwordObject: any): string {
    let passwordLength = Number(passwordObject.passwordLength)
    let passwordHasNumber = Boolean(passwordObject.numberCheckBox)
    let passwordHasLowerCase = Boolean(passwordObject.lowerCaseCheckBox)
    let passwordHasUpperCase = Boolean(passwordObject.upperCaseChckeBox)
    let passwordHasSymbol = Boolean(passwordObject.symbolCheckBox)
    console.log(passwordHasSymbol);
    let newPassword = ""
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const num = '0123456789'
    const punctuation = '!@#$%&*()_|}{[]\?></-='
    let i = 1
    while (i < passwordLength) {
      if (this.passwordLengthValidation(passwordLength)) {
        if ((newPassword.length < passwordLength)) {
          if (passwordHasNumber) {
            newPassword = newPassword.concat(this.randomIndexGenerator(num))
          }
        } else {
          break
        }
        if ((newPassword.length < passwordLength)) {
          if (passwordHasLowerCase) {
            newPassword = newPassword.concat(this.randomIndexGenerator(lowerCase))
          }
        } else {
          break
        }
        if ((newPassword.length < passwordLength)) {
          if (passwordHasUpperCase) {
            newPassword = newPassword.concat(this.randomIndexGenerator(upperCase))
          }
        } else {
          break
        }
        if ((newPassword.length < passwordLength)) {
          if (passwordHasSymbol) {
            newPassword = newPassword.concat(this.randomIndexGenerator(punctuation))
          }
        } else {
          break
        }
      } else {
        return "Please enter number between 8 and 32"
      }
    }
    console.log(newPassword)
    return newPassword
  }
  randomIndexGenerator(str: string): string {
    return str[Math.floor(Math.random() * str.length)]
  }
  passwordLengthValidation(passwordLength: number): boolean {
    if (passwordLength >= 8 && passwordLength <= 32) {
      return true
    } else {
      return false
    }
  }
}
