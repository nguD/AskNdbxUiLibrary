import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ask-ndbx-show-more',
  templateUrl: './ask-ndbx-show-more.component.html',
  styleUrls: ['./ask-ndbx-show-more.component.scss']
})
export class AskNdbxShowMoreComponent implements OnInit {

  @Input() showLabel = "Show";
  @Input() hideLabel = "Hide";
  @Input() defaultShow = false;

  hide: boolean = true;

  constructor() { }

  toggleContent() {
    this.hide = !this.hide;
  }

  ngOnInit() {
  }

}
