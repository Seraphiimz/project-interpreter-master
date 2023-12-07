import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matricula'
})
export class MatriculaPipe implements PipeTransform {
  transform(matricula: string): string {
    if(matricula.length != 5) {
      return matricula;
    }
    return `${matricula.substring(0, 4)}.${matricula.substring(4, 5)}`;
  }
}
