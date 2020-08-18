import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'ask-ndbx-table',
  templateUrl: './ask-ndbx-table.component.html',
  styleUrls: ['./ask-ndbx-table.component.scss']
})
export class AskNdbxTableComponent implements OnInit {
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('[DEBUG] Renderer2', );
    // setTimeout(() => {
    //   this.cssModifier();
    // }, 1000);
  }

  // cssModifier() {
    // let el = document.getElementsByClassName("mat-table")[0];
    // if (el && el.classList) {
    //   console.log('[DEBUG] change css table');
      
    //   this.renderer.removeClass(el,"mat-table");
    //   this.renderer.addClass(el,"nx-table");
    //   this.renderer.removeAttribute(el, "mat-table");
    // }
    // let els = document.getElementsByClassName("mat-header-cell");
    // for (let i = 0; i < els.length; i++) {
    //   var cell = els[i];
    //   console.log('[DEBUG] change css table cell ', cell); 
    //   setTimeout(() => { 
    //     if (cell && cell.classList) {
    //       this.renderer.removeClass(cell,"mat-header-cell");
    //       this.renderer.addClass(cell,"nx-header-cell");
    //       this.renderer.removeAttribute(cell, "mat-header-cell");
    //       console.log('[DEBUG] change css table cell 2', cell); 
    //     }
    //   }, 0);
    // }
  // }

}
