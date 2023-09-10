import { Component, OnDestroy, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IPortability } from '../interfaces/portabilidade.interface';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('fieldSearch', { static: false }) fieldSearch: ElementRef<HTMLInputElement>;

  portabilidade: IPortability;
  private unsub$ = new Subject();
  public filterText: string;
  
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
  
  toHire() {
    console.log('Portabilidade: ', this.portabilidade);
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
    console.log('on destroy transfer component');
  }

  public addUser() {
    this.transferFacade.createUser();
  }

  get users() {
    return this.portabilidade.origem.users;
  }

  ngAfterViewInit(): void {
      fromEvent(this.fieldSearch.nativeElement, 'keyup')
        .pipe(takeUntil(this.unsub$), debounceTime(500))
        .subscribe((e: Event) => {
          this.filterText = (e.target as HTMLInputElement).value;
        });
  }
}
