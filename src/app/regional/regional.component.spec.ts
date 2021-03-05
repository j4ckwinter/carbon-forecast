import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { Observable, throwError } from 'rxjs';
import { BreadcrumbsComponent } from '../internal/breadcrumbs/breadcrumbs.component';
import { Breadcrumb } from '../internal/breadcrumbs/model/breadcrumb';
import { ButtonComponent } from '../internal/button/button.component';
import { HeaderComponent } from '../internal/header/header.component';
import { TextInputComponent } from '../internal/text-input/text-input.component';
import { Region } from '../model/region';
import { ResponseData } from '../model/response-data';
import { RegionalService } from '../service/regional.service';
import { RegionalComponent } from './regional.component';

describe('RegionalComponent', (): void => {
  let component: RegionalComponent;
  let fixture: ComponentFixture<RegionalComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [
          RegionalComponent,
          MockComponent(HeaderComponent),
          MockComponent(BreadcrumbsComponent),
          MockComponent(ButtonComponent),
          MockComponent(TextInputComponent),
        ],
        imports: [ReactiveFormsModule],
        providers: [
          {
            provide: RegionalService,
            useClass: class MockRegionalService {
              getRegionByPostcode(
                postcode: string
              ): Observable<ResponseData<Region>> {
                return throwError(new Error('Not Mocked'));
              }
            },
          },
        ],
      }).compileComponents();
    }
  );

  beforeEach((): void => {
    fixture = TestBed.createComponent(RegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  describe('DOM', (): void => {
    it('should contain expected elements', (): void => {
      // given
      const expectedBreadcrumbs: Breadcrumb[] = [
        {
          title: 'Home',
          routerLink: '/',
        },
        {
          title: 'Regional',
          routerLink: '/regional',
          isActive: true,
        },
      ];
      // when
      const breadcrumbs: BreadcrumbsComponent = fixture.debugElement.query(
        By.css('app-breadcrumbs')
      ).componentInstance;
      const buttonElement: DebugElement[] = fixture.debugElement.queryAll(
        By.css('app-button')
      );
      // then
      expect(breadcrumbs).not.toBeNull();
      expect(breadcrumbs.breadcrumbs).toEqual(expectedBreadcrumbs);
      expect(buttonElement).not.toBeNull();
    });
  });
});
