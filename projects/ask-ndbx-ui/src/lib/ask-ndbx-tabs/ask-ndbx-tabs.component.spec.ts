import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNdbxTabsComponent } from './ask-ndbx-tabs.component';

describe('AskNdbxTabsComponent', () => {
  let component: AskNdbxTabsComponent;
  let fixture: ComponentFixture<AskNdbxTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskNdbxTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNdbxTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
