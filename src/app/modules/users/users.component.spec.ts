import { async, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { StoreMock } from 'src/app/mocks/store-mock';
import { TransferState } from 'src/app/core/store/states/transfer.state';
import { FormBuilderMock } from 'src/app/mocks/formBuilder-mock';

describe('UsersComponent', () => {
  let component: UsersComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    });

    const formBuilder = new FormBuilderMock();
    const transferFacade = new TransferFacade(new StoreMock<TransferState>());
    component = new UsersComponent(formBuilder, transferFacade);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
