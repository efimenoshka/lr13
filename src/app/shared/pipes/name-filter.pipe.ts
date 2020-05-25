import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: any[], searchName: string): any[] {
    if(searchName === '') {
      return items;
    } else {
      let filterItems = items.filter((item) => item.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1);
      return filterItems;
    }
  }
}