import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSplit'
})
export class NameSplitPipe implements PipeTransform {

  transform(value: string, givenName: string): string {
    if (givenName == 'firstName') {
      return value.split(" ")[0]
    } else if (givenName == 'lastName'){
      return value.split(" ")[1]
    } else {
      return 'Please enter valid entry'
    }
  }

}
