import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surnameFilter'
})
export class SurnameFilterPipe implements PipeTransform {

  transform(items: any[], searchSurname: string): any[] {
    if(searchSurname === '') {
      return items;
    } else {
      let filterItems = items.filter((item) => item.name.toLowerCase().indexOf(searchSurname.toLowerCase()) !== -1);
      return filterItems;
    }
  }
}
