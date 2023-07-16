import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
