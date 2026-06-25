import { Pipe, PipeTransform } from '@angular/core';
import { ILocationFormatter } from '../../Interfaces/Location';

@Pipe({
  name: 'locationFormatter',
})
export class LocationFormatterPipe implements PipeTransform {

  transform(value: ILocationFormatter, ...args: unknown[]): string {
    return `${value.city}, ${value.state}`;
  }
}
