import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(list: Array<any>, searchValue: string, searchField: string): Array<any> {
    if (searchValue.trim() === undefined){
      return list;
    }
    // @ts-ignore
    return list.filter(a => a[searchField].toLowerCase().includes(searchValue.toLowerCase()));
  }

}
