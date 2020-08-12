import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNdbxSelectComponent } from './ask-ndbx-select.component';

describe('AskNdbxSelectComponent', () => {
  let component: AskNdbxSelectComponent;
  let fixture: ComponentFixture<AskNdbxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskNdbxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNdbxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
