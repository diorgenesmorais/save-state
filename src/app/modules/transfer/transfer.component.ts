import { Component, OnInit } from '@angular/core';
import { IPortability } from '../interfaces/portabilidade.interface';
import { v4 as uuid } from 'uuid';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  portabilidade: IPortability;
  
  constructor() { }

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
