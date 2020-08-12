import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NxDatepickerComponent } from '@allianz/ngx-ndbx/datefield';
import { Moment } from 'moment';

@Component({
  selector: 'ask-ndbx-date-picker',
  templateUrl: './ask-ndbx-date-picker.component.html',
  styleUrls: ['./ask-ndbx-date-picker.component.css']
})
export class AskNdbxDatePickerComponent implements OnInit {
  @ViewChild('endDatepicker', { static: true }) endDatepicker: NxDatepickerComponent<Moment>;

  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  @Input() 
  placeholder: string;

  @Input()
  start: Moment = null;
  
  @Input()
  end: Moment = null;

  updateEndDatepicker() {
    this.end = this.start;
    setTimeout(() => this.endDatepicker.open());
  }


  constructor() { }

  ngOnInit() {
  }

}
