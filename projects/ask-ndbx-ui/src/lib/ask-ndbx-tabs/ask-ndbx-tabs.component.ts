import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'ask-ndbx-tabs',
  templateUrl: './ask-ndbx-tabs.component.html',
  styleUrls: ['./ask-ndbx-tabs.component.scss']
})
export class AskNdbxTabsComponent implements OnInit {

  constructor(private renderer:Renderer2) { 
   
    
    // this.renderer.addClass(document.getElementsByClassName("mat-table")[0],"selected");
  }

  ngOnInit() {     
  }
}
