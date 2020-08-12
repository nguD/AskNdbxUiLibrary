import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskNdbxDatePickerComponent } from './ask-ndbx-date-picker.component';
import { NxDatefieldModule } from '@allianz/ngx-ndbx/datefield';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { FormsModule } from '@angular/forms';
import { NxMomentDateModule } from '@allianz/ngx-ndbx/moment-date-adapter';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';

@NgModule({
  declarations: [AskNdbxDatePickerComponent],
  imports: [
    CommonModule,
    NxDatefieldModule,
    FormsModule,
    NxFormfieldModule,
    NxMomentDateModule,
    NxInputModule,
    NxGridModule
  ],
  exports: [AskNdbxDatePickerComponent]
})
export class AskNdbxDatePickerModule { }
