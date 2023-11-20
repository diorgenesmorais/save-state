import { TestBed } from '@angular/core/testing';

import { SubDestroyService } from './sub-destroy.service';

describe('SubDestroyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SubDestroyService]
  }));

  it('should be created', () => {
    const service: SubDestroyService = TestBed.get(SubDestroyService);
    expect(service).toBeTruthy();
  });
});
