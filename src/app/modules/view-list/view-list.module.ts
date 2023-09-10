import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewListComponent } from './view-list.component';



@NgModule({
  declarations: [ViewListComponent],
  imports: [
    CommonModule
  ],
  exports: [ViewListComponent]
})
export class ViewListModule { }
