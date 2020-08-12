import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {isNullOrUndefined} from 'util';

export interface SelectResult {
  opened: boolean;
  data: any[];
  selectedItems: any[];
}

export interface ItemSelect {
  id: string;
  label: string;
}

@Component({
  selector: 'ask-ndbx-select',
  templateUrl: './ask-ndbx-select.component.html',
  styleUrls: ['./ask-ndbx-select.component.css']
})
export class AskNdbxSelectComponent implements OnInit {

  @Input()
  data: any[];

  @Input()
  key: (item: any) => any ;

  @Input()
  value: (item: any) => any ;

  @Input()
  label: string;

  @Input()
  multiple: boolean;

  @Input()
  mandatory: boolean;

  @Input()
  hintable: boolean;

  @Input()
  recovery: any;

  @Output()
  selectChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output()
  openedChange: EventEmitter<SelectResult> = new EventEmitter<SelectResult>();

  selected: FormControl;

  @Input()
  error: HttpErrorResponse;

  curValue: any;

  selectThematicAll: boolean;

  constructor() {
    this.selected = isNullOrUndefined(this.selected) ? new FormControl(null, []) : this.selected;
  }

  ngOnInit() {
    this.selectThematicAll = true;
    console.log('SelectComponent.ngOnInit', this.recovery);
    console.log('[DEBUG] ask-ndbx-select data', this.data);
    this.selected.setValue(this.recovery, {emitEvent: false});
    this.curValue = this.recovery;
    
    console.log('[DEBUG] input value 1', this.selected);
  }

  onSelectionChange(event: any) {
    console.log('SelectComponent.onSelectionChange(event)', event);
    let value = event.value;
    if (this.multiple) {
      const allSelected = value.find((item: any) => item.id === 'ALL');
      if (allSelected !== -1 && value.length !== 1) {
        if (!this.selectThematicAll && allSelected !== undefined && allSelected.id === 'ALL') {
          value = event.value.filter((item: any) => item.id === 'ALL');
          this.selectThematicAll = true;
        } else {
          if (allSelected !== undefined && allSelected.id === 'ALL') {
            value = event.value.filter((item: any) => item.id !== 'ALL');
            this.selectThematicAll = false;
          }
        }
      }
    }else{
      value = event.value.id;
    }
    this.selected.setValue(value);
    this.selectChange.emit(value);
  }

  valueFormater(option) {
    if (option.label) {
      return option.label;
    }
    return option;
  }

  onOpenedChange(event: boolean) {
    console.log('SelectComponent.onOpenedChange(event)', event);
    const opened = event;
    const selectedItems = this.selected.value;
    const data = this.data;
    this.openedChange.emit({
      opened,
      data,
      selectedItems
    });
  }

  get hasError() {
    return !this.hasNoError;
  }

  get hasNoError() {
    return isNullOrUndefined(this.error);
  }


}
