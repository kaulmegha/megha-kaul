import {TestBed} from '@angular/core/testing';

import {ContactService} from './contact.service';
import {MockAboutService} from '../about/mock-about.service';

describe('ContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const sut = new MockAboutService();
    expect(sut).toBeTruthy();
  });
});
