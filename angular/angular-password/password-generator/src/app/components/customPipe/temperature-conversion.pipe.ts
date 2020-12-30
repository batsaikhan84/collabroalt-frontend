import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion'
})
export class TemperatureConversionPipe implements PipeTransform {

  transform(value: number, unit: string): string {
    let temperature = 0
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        temperature = (value - 30) / 1.8
      } else if ((unit = 'F')) {
        temperature = value * 1.8 +32
      }
    }
    return temperature.toString()
  }
}
