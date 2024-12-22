import {TestBed} from '@angular/core/testing';

import {AboutService} from './about.service';
import {MockAboutService} from './mock-about.service';

describe('AboutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const sut = new MockAboutService();
    expect(sut).toBeTruthy();
  });

});
