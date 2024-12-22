import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export const AboutServiceToken = new InjectionToken<AboutService>('AboutService');

export interface AboutService {

  getAbout(): Observable<string []>;
}
