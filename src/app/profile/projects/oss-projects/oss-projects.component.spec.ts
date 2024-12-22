import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {OssProjectsComponent} from './oss-projects.component';
import {ProjectsServiceToken} from '../../../services/projects/projects.service';
import {MockProjectsService} from '../../../services/projects/mock-projects.service';

describe('OssProjectsComponent', () => {
  let component: OssProjectsComponent;
  let fixture: ComponentFixture<OssProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OssProjectsComponent],
      providers: [
        {provide: ProjectsServiceToken, useClass: MockProjectsService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
