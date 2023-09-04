import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FieldErrorDirective } from './field-error.directive';
import { CUSTOM_ELEMENTS_SCHEMA, ElementRef, NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';
import { UsersComponent } from '../modules/users/users.component';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from '../core/store/app.reducers';
import { FormBuilder, Validators } from '@angular/forms';

describe('FieldErrorDirective', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(AppReducers)
      ],
      declarations: [ UsersComponent, FieldErrorDirective ],
      providers: [
        FormBuilder
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a alert-error class', () => {
    component.ngOnInit();

    const input: HTMLElement = fixture.nativeElement.querySelector('input');
    const classFound = `${input.classList.value}`.includes('form-control');

    expect(classFound).toBeTruthy();
  });
});
