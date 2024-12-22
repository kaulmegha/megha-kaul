import {ContactService} from './contact.service';
import {Contact} from '../../models/contact';
import {Observable, of} from 'rxjs';
import {FormspreeResponse} from '../../models/response/formspree.response';
import {IpInfo} from '../../models/ip-info/ip-info';
import {map} from 'rxjs/operators';
import {IpInfoConverter} from '../../responses/ip-info.response';
import {Injectable} from '@angular/core';

@Injectable()
export class MockContactService implements ContactService {
  constructor() {
    console.log('Mock Contact Services');
  }

  contactForm(formdata: Contact): Observable<FormspreeResponse> {
    return of({next: '', ok: true});
  }

  getClientInfo(): Observable<any> {
    return of(
      {
        status: 'success',
        country: 'United States',
        countryCode: 'US',
        region: 'OR',
        regionName: 'Oregon',
        city: 'Portland',
        zip: '97225',
        lat: 45.5033,
        lon: -122.7744,
        timezone: 'America/Los_Angeles',
        isp: 'Comcast Cable Communications, LLC',
        org: 'Comcast IP Services, L.L.C.',
        as: 'AS7922 Comcast Cable Communications, LLC',
        query: '73.157.136.242'
      }
    ).pipe(map(response => IpInfoConverter.convert(response)));
  }

}
