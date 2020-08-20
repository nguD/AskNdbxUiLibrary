import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { NxCardModule } from '@allianz/ngx-ndbx/card';
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';


@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    NxCardModule,
    NxIconModule,
    NxGridModule
  ],
  exports: [UserInfoComponent],
})
export class AskNdbxUserInfoModule { }
 