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

  ngOnInit() {
    this.portabilidade = {
      origem: {
        users: []
      }
    }
    this.addUser();
  }
  
  public addUser() {
    this.portabilidade
      .origem
        .users
          .push({
            name: '',
            email: '',
            wantInfo: false,
            uuid: uuid()
          });
  }

  private handleUserData(user: IUser) {
    this.portabilidade.origem.users = this.portabilidade.origem.users.map(u => {
      if (u.uuid == user.uuid) {
        u = user;
      }
      return u;
    });
    console.log('user data: ', user, this.portabilidade.origem.users);
  }

  getUserData(user: IUser) {
    this.handleUserData(user);
  }

  toHire() {
    console.log('Portabilidade: ', this.portabilidade);
  }
}
