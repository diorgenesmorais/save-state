import { async, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { StoreMock } from '../../mocks/store-mock';
import { TransferState } from 'src/app/core/store/states/transfer.state';

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    });

    const transferFacade = new TransferFacade(new StoreMock<TransferState>());
    component = new HomeComponent(transferFacade);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
