import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ContactComponent} from './contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ContactServiceToken} from '../../services/contact/contact.service';
import {BackendContactService} from '../../services/contact/backend-contact.service';
import {MockContactService} from '../../services/contact/mock-contact.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        {provide: ContactServiceToken, useClass: MockContactService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
