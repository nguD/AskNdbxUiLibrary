import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNdbxToolbarComponent } from './ask-ndbx-toolbar.component';

describe('AskNdbxToolbarComponent', () => {
  let component: AskNdbxToolbarComponent;
  let fixture: ComponentFixture<AskNdbxToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskNdbxToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNdbxToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
