import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';
import { UsersModule } from '../users/users.module';
import { ListFilterPipe } from '../../pipes/list-filter.pipe';

@NgModule({
  declarations: [TransferComponent, ListFilterPipe],
  imports: [
    CommonModule,
    UsersModule
  ],
  exports: [TransferComponent]
})
export class TransferModule { }
