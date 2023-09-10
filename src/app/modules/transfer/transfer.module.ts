import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';
import { UsersModule } from '../users/users.module';
import { ListFilterPipe } from '../../pipes/list-filter.pipe';
import { ViewListModule } from '../view-list/view-list.module';

@NgModule({
  declarations: [TransferComponent, ListFilterPipe],
  imports: [
    CommonModule,
    UsersModule,
    ViewListModule
  ],
  exports: [TransferComponent]
})
export class TransferModule { }
