import { TestBed } from '@angular/core/testing';

import { GetService } from './get-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ApiServiceService', () => {
  let service: GetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
