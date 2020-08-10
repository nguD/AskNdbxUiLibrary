import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNdbxUiComponent } from './ask-ndbx-ui.component';

describe('AskNdbxUiComponent', () => {
  let component: AskNdbxUiComponent;
  let fixture: ComponentFixture<AskNdbxUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskNdbxUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNdbxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
