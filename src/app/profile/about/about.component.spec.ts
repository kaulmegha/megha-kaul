import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {AboutComponent} from './about.component';
import {AboutServiceToken} from '../../services/about/about.service';
import {MockAboutService} from '../../services/about/mock-about.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      providers: [
        {provide: AboutServiceToken, useClass: MockAboutService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
