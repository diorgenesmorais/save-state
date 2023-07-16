import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [TransferComponent],
  imports: [
    CommonModule,
    UsersModule
  ],
  exports: [TransferComponent]
})
export class TransferModule { }
