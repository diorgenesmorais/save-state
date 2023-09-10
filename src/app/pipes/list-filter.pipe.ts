import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../modules/interfaces/user.interface';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(list: Array<IUser>, filterText: string): Array<IUser> {
    if(filterText) {
      return list.filter(item =>
        item.name.toUpperCase().includes(filterText.toUpperCase())
      );
    }
    return list;
  }
}
