import { TestBed, inject } from '@angular/core/testing';

import { AuthenServiceService } from './authen-service.service';

describe('AuthenServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenServiceService]
    });
  });

  it('should be created', inject([AuthenServiceService], (service: AuthenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
