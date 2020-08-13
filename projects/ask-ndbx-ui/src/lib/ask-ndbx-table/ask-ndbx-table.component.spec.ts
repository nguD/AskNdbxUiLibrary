import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNdbxTableComponent } from './ask-ndbx-table.component';

describe('AskNdbxTableComponent', () => {
  let component: AskNdbxTableComponent;
  let fixture: ComponentFixture<AskNdbxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskNdbxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNdbxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
