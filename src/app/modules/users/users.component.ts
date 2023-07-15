import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() user: IUser;

  @Output() publishEvent = new EventEmitter<IUser>();

  suggestedUserList = ['Diorgenes', 'Laudeci', 'Deyvison'];

  constructor() { }

  ngOnInit() {
  }

  public save() {
    this.publishEvent.emit(this.user);
  }
}
