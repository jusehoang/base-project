import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'percentPipe'
})
export class PercentPipe implements PipeTransform {
  transform(value: number | undefined) {
    return `-${value}%`;
  }

}
