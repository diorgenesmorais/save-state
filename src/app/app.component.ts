import { Component, OnInit } from '@angular/core';
import { IUser } from './modules/interfaces/user.interface';
import { v4 as uuid } from 'uuid';
import { IPortability } from './modules/interfaces/portabilidade.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  portabilidade: IPortability;

  private userList: Array<IUser> = [];

  ngOnInit() {
    this.addUser();
    this.portabilidade = {
      origem: {
        users: this.userList
      }
    }
  }
  
  public addUser() {
    this.userList.push({
      name: '',
      email: '',
      wantInfo: false,
      uuid: uuid()
    });
  }

  private handleUserData(user: IUser) {
    console.log('user data: ', user, this.userList);
    this.userList.forEach(u => {
      if (u.uuid == user.uuid) {
        u = user;
      }
    });
  }

  getUserData(user: IUser) {
    this.handleUserData(user);
  }

  toHire() {
    console.log('Portabilidade: ', this.portabilidade);
  }
}
