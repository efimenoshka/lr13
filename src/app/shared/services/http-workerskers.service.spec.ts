import { TestBed } from '@angular/core/testing';

import { HttpWorkerskersService } from './http-workerskers.service';

describe('HttpWorkerskersService', () => {
  let service: HttpWorkerskersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpWorkerskersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
