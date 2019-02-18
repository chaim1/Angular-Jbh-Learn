import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'curency'
})
export class CurencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(environment);
    switch (environment.curency) {
      case 'NIS':
      return value * 3.7;
      case 'EUR': 
      return value * 4;
      default:
      return value;
    }
  }

}
