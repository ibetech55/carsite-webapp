import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormatter',
})
export class MoneyFormatterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
}
