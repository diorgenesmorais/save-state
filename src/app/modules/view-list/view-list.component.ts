import { Component, Input } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent {

  @Input() users: Array<IUser> = [];

}
