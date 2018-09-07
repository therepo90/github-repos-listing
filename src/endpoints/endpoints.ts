import {environment} from '../environments/environment';
import { Location } from '@angular/common';
export const endpoints = {
  repos: Location.joinWithSlash(environment.apiBaseUrl, 'repos'),
};
