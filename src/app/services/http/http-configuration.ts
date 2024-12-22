import {InjectionToken} from '@angular/core';

export const HttpConfigurationToken = new InjectionToken<HttpConfiguration>('HttpConfiguration');

export interface HttpConfiguration {
  baseUrl: string;
  version: string;
}
