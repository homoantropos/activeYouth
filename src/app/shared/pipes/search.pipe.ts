import { Pipe, PipeTransform } from '@angular/core';
import {SportKind} from '../interfases';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Array<SportKind>, searchValue: string, field: string = 'sportKind'): Array<SportKind> {
    if (searchValue.trim() === undefined){
      return list;
    }
    return list.filter(a => a.sportKind.toLowerCase().includes(searchValue.toLowerCase()));
  }

}
