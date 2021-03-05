import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { REGIONAL_URL } from '../config/regional-url.injector';
import { Region } from '../model/region';
import { ResponseData } from '../model/response-data';
import { RegionalService } from './regional.service';

describe('RegionalService', (): void => {
  let service: RegionalService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: REGIONAL_URL,
          useValue: '/regional',
        },
      ],
    });
    service = TestBed.inject(RegionalService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  describe('getRegionByPostcode', (): void => {
    it('should build a http request with the expected params', (): void => {
      // given
      const postcode: string = 'BS34';
      const url: string = '/regional/postcode/BS34';
      const expectedResponse: Observable<null> = of(null);
      const httpClient: HttpClient = TestBed.inject(HttpClient);
      spyOn(httpClient, 'get').and.returnValue(expectedResponse);
      // when
      const actualResponse: Observable<
        ResponseData<Region>
      > = service.getRegionByPostcode(postcode);
      // then
      expect(httpClient.get).toHaveBeenCalledTimes(1);
      expect(httpClient.get).toHaveBeenCalledWith(url);
      expect(actualResponse).toEqual(expectedResponse);
    });
  });
});
