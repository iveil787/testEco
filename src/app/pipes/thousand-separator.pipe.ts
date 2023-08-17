import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeparator'
})
export class ThousandSeparatorPipe implements PipeTransform {

  transform(value: string): string {
    let val = value.replace(/[^0-9.]/g, '');
    if (val.indexOf('.') !== -1) {
      val = val.substring(0, val.indexOf('.') + 3);
    }
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return val;
  }

}
