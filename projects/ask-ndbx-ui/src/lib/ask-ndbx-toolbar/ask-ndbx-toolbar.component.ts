import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
// import {MenuItem} from '../../../../ask-data-access/src/lib/util/types';

export type PdfFileItem = {
  onClick: Function,
  label: string,
}

@Component({
  selector: 'ask-ndbx-toolbar',
  templateUrl: './ask-ndbx-toolbar.component.html',
  styleUrls: ['./ask-ndbx-toolbar.component.scss']
})
export class AskNdbxToolbarComponent implements OnInit {

  @ViewChild("sidebar", {static: false}) sidebar: ElementRef;
  @Input() menuItems: any[] | null | undefined;
  @Input() pdfFiles: PdfFileItem[] | null | undefined;
  @Input() title: string = "Title";
  @Input() identity: boolean;
  @Input() isAgent: boolean;
  @Input() isSupervisor: any;
  @Output() onLogout = new EventEmitter();
  public isInit: boolean = false;
  
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    (document.getElementsByClassName("mat-drawer")[0] as any).style.display = "none"
  }

  ngAfterViewInit() {
    (this.sidebar as any).close();
    setTimeout(() => {
      this.isInit = true;  
    }, 300); 
    console.log('[DEBUG] AskNdbxToolbarComponent', this.pdfFiles, this.menuItems);
    
  }
}
