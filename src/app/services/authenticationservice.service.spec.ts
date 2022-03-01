import { TestBed } from '@angular/core/testing';

import { AuthenticationSrvice } from './authenticationservice.service';

describe('AuthenticationSrvice', () => {
  let service: AuthenticationSrvice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationSrvice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
