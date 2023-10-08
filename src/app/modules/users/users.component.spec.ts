import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from 'src/app/core/store/app.reducers';
import { MessageComponent } from './message/message.component';

fdescribe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let transferFacade: TransferFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(AppReducers)
      ],
      declarations: [ UsersComponent ],
      providers: [
        FormBuilder
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(UsersComponent);
    transferFacade = fixture.debugElement.injector.get(TransferFacade);
    component = fixture.componentInstance;
  }));

  const setFormValues = () => {
    component.ngOnInit();
    component.forms.name.setValue('Diorgenes');
    component.forms.cpf.setValue('00725580321');
    component.forms.email.setValue('diorgenes@gmail.com');
  }

  it('should create', () => {
    component.ngOnInit();

    expect(component).toBeTruthy();
  });

  it('should save informed user', () => {
    component.ngOnInit();

    spyOn(transferFacade, 'saveUser');

    expect(transferFacade.saveUser)
      .withContext('antes de chamar save no componente')
      .not.toHaveBeenCalled();

    component.save();
    expect(transferFacade.saveUser)
      .withContext('após chamar save')
      .toHaveBeenCalled();
  });

  it('deve ser um formulário válido', () => {
    setFormValues();

    expect(component.form.valid).toBeTruthy();
  });

  it('deve obter uma mensagem', () => {
    component.ngOnInit();
    const messageDispatch = new MessageComponent();
    messageDispatch.control = component.forms.cpf as FormControl;
    component.form.markAllAsTouched();

    expect(messageDispatch.getMessage()).toBe('CPF inválido!');
  });

  it('deve ser um formulário inválido', () => {
    setFormValues();
    component.forms.cpf.setValue('');

    expect(component.form.invalid).toBeTruthy();
  });
});
