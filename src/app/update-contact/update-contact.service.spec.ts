import { TestBed } from '@angular/core/testing';

import { UpdateContactService } from './update-contact.service';

describe('UpdateContactService', () => {
  let service: UpdateContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
