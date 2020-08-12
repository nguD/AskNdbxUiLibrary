import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNdbxDatePickerComponent } from './ask-ndbx-date-picker.component';

describe('AskNdbxDatePickerComponent', () => {
  let component: AskNdbxDatePickerComponent;
  let fixture: ComponentFixture<AskNdbxDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskNdbxDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNdbxDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
