import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'currencyPipe'
})

export class CurrencyPipe implements PipeTransform {
  transform(value: number | undefined) {
    if (value === undefined) {
      return;
    }

    const currency = value.toString();
    let str = '';
    let count = 0;
    for (let i = currency.length - 1; i >= 0; i--) {
      str = currency[i] + str;
      count++;
      if (i === 0) {
        break;
      }
      if (count === 3) {
        str = ',' + str;
        count = 0;
      }
    }
    str = str + '₫';

    return str;
  }
}
