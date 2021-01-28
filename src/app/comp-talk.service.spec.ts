import { TestBed } from '@angular/core/testing';

import { CompTalkService } from './comp-talk.service';

describe('CompTalkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompTalkService = TestBed.get(CompTalkService);
    expect(service).toBeTruthy();
  });
});
