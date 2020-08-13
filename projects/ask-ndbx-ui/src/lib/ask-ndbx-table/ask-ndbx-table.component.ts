import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'ask-ndbx-table',
  templateUrl: './ask-ndbx-table.component.html',
  styleUrls: ['./ask-ndbx-table.component.scss']
})
export class AskNdbxTableComponent implements OnInit {
  tableElements = [
    {
       product: 'Sach',
       contractNumber: 1234,
       desc: 'this is a contract',
       website: 'www.allianzSach.de',
       endingAt: '1/3/2020',
       status: 'negative',
       statusText: 'open'
    },
    {
       product: 'Kraft',
       contractNumber: 2423,
       desc: 'this is another contract',
       website: 'www.allianzKraft.de',
       endingAt: '4/2/2020',
       status: 'active',
       statusText: 'accepted'
    },
    {
       product: 'Sach',
       contractNumber: 353455,
       desc: 'Lorem ipsum dolor sit amet, csis libero. ',
       website: 'www.allianzSach.de',
       endingAt: '6/2/2020',
       status: 'positive',
       statusText: 'accepted'
    },
    {
       product: 'Kleine Flotte',
       contractNumber: 22344,
       desc: 'this is a description of a contract',
       website: 'www.allianzKF.de',
       endingAt: '1/2/2027',
       status: 'critical',
       statusText: 'rejected'
    }
  ];
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
      this.renderer.removeClass(el,"mat-header-cell");
      this.renderer.addClass(el,"nx-header-cell");
    }
    els = document.getElementsByClassName("mat-header-cell");
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      this.renderer.removeClass(el,"mat-header-cell");
      this.renderer.addClass(el,"nx-header-cell");
    }
  }

}
