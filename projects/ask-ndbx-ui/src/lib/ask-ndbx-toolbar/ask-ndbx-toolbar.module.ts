import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskNdbxToolbarComponent } from './ask-ndbx-toolbar.component';
import { NxHeaderModule } from '@allianz/ngx-ndbx/header';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxButtonModule } from '@allianz/ngx-ndbx/button';
import { NxSidebarModule } from '@allianz/ngx-ndbx/sidebar';
import { NxActionModule } from '@allianz/ngx-ndbx/action';
import {RouterModule} from "@angular/router"

@NgModule({
  imports: [
    CommonModule,
    NxHeaderModule,
    NxLinkModule,
    NxIconModule,
    NxButtonModule,
    NxSidebarModule,
    NxActionModule,
    RouterModule
  ],
  declarations: [
    AskNdbxToolbarComponent,
  ],
  exports: [
    AskNdbxToolbarComponent,
  ]
})
export class AskNdbxToolbarModule { }
