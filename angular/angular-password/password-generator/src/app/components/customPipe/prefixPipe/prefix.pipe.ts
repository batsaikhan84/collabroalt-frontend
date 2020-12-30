import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(name: string, title: string): string {
    if (title === 'Male') {
      return `Mr ${name}`
    } else if (title === 'Female') {
      return `Ms ${name}`
    }
    return ''
  }
}
