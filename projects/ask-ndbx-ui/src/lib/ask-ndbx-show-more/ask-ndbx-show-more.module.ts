import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskNdbxShowMoreComponent } from './ask-ndbx-show-more.component';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';


@NgModule({
  declarations: [AskNdbxShowMoreComponent],
  imports: [
    CommonModule,
    NxLinkModule
  ],
  exports: [AskNdbxShowMoreComponent]
})
export class AskNdbxShowMoreModule { }
