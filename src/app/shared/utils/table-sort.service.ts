import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableSortService {

  constructor() {
  }

  sortTableByStringValues(sortOption: any, sortedArray: Array<any>, direction: boolean): boolean {
    console.log(sortedArray[0][sortOption]);
    if (typeof sortedArray[0][sortOption] === 'string') {
      if (direction) {
        sortedArray.sort((a, b) => b[sortOption].toLowerCase().localeCompare(a[sortOption].toLowerCase()));
      } else {
        sortedArray.sort((a, b) => a[sortOption].toLowerCase().localeCompare(b[sortOption].toLowerCase()));
      }
    } else {
      if (direction) {
        sortedArray.sort((a, b) => b[sortOption] - a[sortOption]);
      } else {
        sortedArray.sort((a, b) => a[sortOption] - b[sortOption]);
      }
    }
    return !direction;
  }
}
