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
    console.log('[DEBUG] Renderer2', );
    setTimeout(() => {
      this.cssModifier();
    }, 0);
  }

  cssModifier() {
    const el = document.getElementsByClassName("mat-table")[0];
    this.renderer.removeClass(el,"mat-table");
    this.renderer.addClass(el,"nx-table");
    let els = document.getElementsByClassName("mat-header-cell");
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      setTimeout(() => { 
        this.renderer.removeClass(el,"mat-header-cell");
        this.renderer.addClass(el,"nx-header-cell");
      }, 0);
    }
  }

}
