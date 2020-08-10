import { TestBed } from '@angular/core/testing';

import { AskNdbxUiService } from './ask-ndbx-ui.service';

describe('AskNdbxUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AskNdbxUiService = TestBed.get(AskNdbxUiService);
    expect(service).toBeTruthy();
  });
});
