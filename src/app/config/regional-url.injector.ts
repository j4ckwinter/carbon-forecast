import { InjectionToken } from '@angular/core';
import { BASE_URL } from './base-url.const';

export const REGIONAL_URL: InjectionToken<string> = new InjectionToken<string>(
  'REGIONAL_URL',
  {
    providedIn: 'root',
    factory: (): string => BASE_URL + '/regional',
  }
);
