import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskNdbxSelectComponent } from './ask-ndbx-select.component';
import { NxDropdownModule } from '@allianz/ngx-ndbx/dropdown';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';





@NgModule({
  declarations: [AskNdbxSelectComponent],
  imports: [
    CommonModule,
    NxDropdownModule,
    NxFormfieldModule
  ],
  exports: [AskNdbxSelectComponent] 
})
export class AskNdbxSelectModule { }
