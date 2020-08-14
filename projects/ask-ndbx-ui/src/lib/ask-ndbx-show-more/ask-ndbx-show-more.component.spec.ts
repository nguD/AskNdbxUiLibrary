import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNdbxShowMoreComponent } from './ask-ndbx-show-more.component';

describe('AskNdbxShowMoreComponent', () => {
  let component: AskNdbxShowMoreComponent;
  let fixture: ComponentFixture<AskNdbxShowMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskNdbxShowMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNdbxShowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
