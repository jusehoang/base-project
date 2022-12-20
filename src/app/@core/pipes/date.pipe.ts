import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  transform(value: Date | undefined) {
    if (!value) {
      return '';
    }

    let result = '' + value.getDate() + ' ';
    switch(value.getMonth()) {
      case 0:
        result = result + 'Tháng Một' + ', ';
        break;
      case 1:
        result = result + 'Tháng Hai' + ', ';
        break;
      case 2:
        result = result + 'Tháng Ba' + ', ';
        break;
      case 3:
        result = result + 'Tháng Bốn' + ', ';
        break;
      case 4:
        result = result + 'Tháng Năm' + ', ';
        break;
      case 5:
        result = result + 'Tháng Sáu' + ', ';
        break;
      case 6:
        result = result + 'Tháng Bảy' + ', ';
        break;
      case 7:
        result = result + 'Tháng Tám' + ', ';
        break;
      case 8:
        result = result + 'Tháng Chín' + ', ';
        break;
      case 9:
        result = result + 'Tháng Mười' + ', ';
        break;
      case 10:
        result = result + 'Tháng Mười Một' + ', ';
        break;
      case 11:
        result = result + 'Tháng Mười Hai' + ', ';
        break;
    }

    return result + value.getFullYear();
  }
}
