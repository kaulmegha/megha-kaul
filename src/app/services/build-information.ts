import {InjectionToken} from '@angular/core';

export const BuildInformationToken = new InjectionToken<BuildInformation>('BuildInformation');

export interface BuildInformation {
  version: string;
  commit: string;
  buildTime: string;
  buildPipeline: number;
}
