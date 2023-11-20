import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SubDestroyService extends Subject<void> implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Desinscrevendo...');
    this.next();
    this.complete();
  }
}
