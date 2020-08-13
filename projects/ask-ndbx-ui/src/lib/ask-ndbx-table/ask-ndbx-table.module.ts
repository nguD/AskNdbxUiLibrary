import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskNdbxTableComponent } from './ask-ndbx-table.component';
import { NxTableModule } from '@allianz/ngx-ndbx/table';




@NgModule({
  declarations: [AskNdbxTableComponent],
  imports: [
    CommonModule,
    NxTableModule
  ],
  exports: [AskNdbxTableComponent]
})
export class AskNdbxTableModule { }
