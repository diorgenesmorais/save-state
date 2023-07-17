import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPortability } from '../interfaces/portabilidade.interface';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

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
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
    console.log('on destroy home component');
  }
}
