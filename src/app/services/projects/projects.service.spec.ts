import {TestBed} from '@angular/core/testing';

import {ProjectsService} from './projects.service';
import {MockProjectsService} from './mock-projects.service';

describe('ProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const sut = new MockProjectsService();
    expect(sut).toBeTruthy();
  });
});
