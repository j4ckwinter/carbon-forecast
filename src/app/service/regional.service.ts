import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REGIONAL_URL } from '../config/regional-url.injector';
import { Region } from '../model/region';
import { ResponseData } from '../model/response-data';

@Injectable({
  providedIn: 'root',
})
export class RegionalService {
  constructor(
    private _httpClient: HttpClient,
    @Inject(REGIONAL_URL) private _regionalUrl: string
  ) {}

  getRegionByPostcode(postcode: string): Observable<ResponseData<Region>> {
    return this._httpClient.get<ResponseData<Region>>(
      this._regionalUrl + '/postcode/' + postcode
    );
  }
}
