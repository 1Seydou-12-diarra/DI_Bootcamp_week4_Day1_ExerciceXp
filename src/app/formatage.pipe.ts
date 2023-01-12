import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatage'
})
export class FormatagePipe implements PipeTransform {

  transform(value:string) :string {
    return `${ value.toUpperCase()}`; 
  }

}
