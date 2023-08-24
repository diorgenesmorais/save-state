import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferComponent } from './transfer.component';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { StoreMock } from 'src/app/mocks/store-mock';
import { TransferState } from 'src/app/core/store/states/transfer.state';

describe('TransferComponent', () => {
  let component: TransferComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferComponent ]
    });

    const transferFacade = new TransferFacade(new StoreMock<TransferState>())
    component = new TransferComponent(transferFacade);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
