import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPortability } from '../interfaces/portabilidade.interface';
import { v4 as uuid } from 'uuid';
import { IUser } from '../interfaces/user.interface';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit, OnDestroy {

  portabilidade: IPortability;
  private unsub$ = new Subject();
  
  constructor(
    private transferFacade: TransferFacade
  ) { }

  ngOnInit() {
    this.transferFacade.portabilidadeState$
      .pipe(takeUntil(this.unsub$))
      .subscribe(state => {
        this.portabilidade = state;
      });
    
    this.transferFacade.createUser();
  }
  
  getUserData(user: IUser) {
    this.transferFacade.saveUser(user);
  }

  toHire() {
    console.log('Portabilidade: ', this.portabilidade);
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
    console.log('on destroy transfer component');
  }
}
