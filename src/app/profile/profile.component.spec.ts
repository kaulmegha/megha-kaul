import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {ProfileModule} from './profile.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BuildInformationToken} from '../services/build-information';
import {ContactServiceToken} from '../services/contact/contact.service';
import {MockContactService} from '../services/contact/mock-contact.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      // declarations: [ProfileModule],
      imports: [ProfileModule, NoopAnimationsModule],
      providers: [
        {provide: BuildInformationToken, useValue: {}},
        {provide: ContactServiceToken, useClass: MockContactService},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
