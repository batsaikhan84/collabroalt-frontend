import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {
  newPassword = ""
  numberCheckBox = true
  lowerCaseCheckBox = true
  upperCaseChckeBox = true
  symbolCheckBox = true
  generatePassword(passwordObject: any): void {
    let passwordLength = Number(passwordObject.passwordLength)
    let passwordHasNumber = Boolean(passwordObject.numberCheckBox)
    let passwordHasLowerCase = Boolean(passwordObject.lowerCaseCheckBox)
    let passwordHasUpperCase = Boolean(passwordObject.upperCaseChckeBox)
    let passwordHasSymbol = Boolean(passwordObject.symbolCheckBox)
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const num = '0123456789'
    const punctuation = '!@#$%&*()_|}{[]\?></-='
    let i = 1
    while (i < passwordLength) {
      if (this.passwordLengthValidation(passwordLength)) {
        if ((this.newPassword.length < passwordLength)) {
          if (passwordHasNumber) {
            this.newPassword = this.newPassword.concat(this.randomIndexGenerator(num))
          }
        } else {
          break
        }
        if ((this.newPassword.length < passwordLength)) {
          if (passwordHasLowerCase) {
            this.newPassword = this.newPassword.concat(this.randomIndexGenerator(lowerCase))
          }
        } else {
          break
        }
        if ((this.newPassword.length < passwordLength)) {
          if (passwordHasUpperCase) {
            this.newPassword = this.newPassword.concat(this.randomIndexGenerator(upperCase))
          }
        } else {
          break
        }
        if ((this.newPassword.length < passwordLength)) {
          if (passwordHasSymbol) {
            this.newPassword = this.newPassword.concat(this.randomIndexGenerator(punctuation))
          }
        } else {
          break
        }
      } else {
        console.log("Please enter number between 8 and 32")
      }
    }
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
  constructor() { }

  ngOnInit(): void {
  }

}
