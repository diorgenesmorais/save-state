import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDirective } from 'src/app/directives/field-error.directive';

@NgModule({
  declarations: [UsersComponent, FieldErrorDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
