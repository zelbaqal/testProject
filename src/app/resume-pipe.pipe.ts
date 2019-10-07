import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumePipe'
})
export class ResumePipePipe implements PipeTransform {

  transform(value: any, limit? : number): any {
   return value ? value.substr(0,limit)+"..." : null;
  }

}
