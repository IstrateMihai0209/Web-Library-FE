import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { changeUsernameGuard } from './change-username.guard';

describe('changeUsernameGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => changeUsernameGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
