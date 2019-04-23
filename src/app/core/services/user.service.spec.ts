import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setCurrentUser should create a user ', () => {
    service.setCurrentUser('nabil');
    expect(service.currentUser.login === 'nabil');
  });

  it('isLoggedIn return true ', () => {
    service.setCurrentUser('nabil');
    expect(service.isLoggedIn);
  });

  it('currentUser to be null ', () => {
    service.setCurrentUser('nabil');
    service.logout();
    expect(service.currentUser).toBeNull;
  });


  it('isLoggedIn return false ', () => {
    service.setCurrentUser('nabil');
    service.logout();
    expect(service.isLoggedIn).toBeFalsy;
  });

});
