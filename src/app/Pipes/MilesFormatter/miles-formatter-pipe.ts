import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesFormatter',
})
export class MilesFormatterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return new Intl.NumberFormat('en-us', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value).concat(" mi.");
  }

}
