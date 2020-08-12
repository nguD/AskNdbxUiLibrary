import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AskNdbxTabGroupComponent } from './ask-ndbx-tab-group/ask-ndbx-tab-group.component';
// import { AskNdbxTabComponent } from './ask-ndbx-tab/ask-ndbx-tab.component';
import { AskNdbxTabsComponent } from './ask-ndbx-tabs.component';
import { NxTabsModule } from '@allianz/ngx-ndbx/tabs';


@NgModule({
  declarations: [AskNdbxTabsComponent],
  imports: [
    CommonModule,
    NxTabsModule
  ],
  exports: [AskNdbxTabsComponent, NxTabsModule]
})
export class AskNdbxTabsModule { }
