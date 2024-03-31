import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchKey: string): any[] {
    if (!items || !items.length || !searchText || !searchKey) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return item[searchKey].toLowerCase().includes(searchText);
    });
  }
}
