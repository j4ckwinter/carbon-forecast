import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { BreadcrumbsComponent } from '../internal/breadcrumbs/breadcrumbs.component';
import { Breadcrumb } from '../internal/breadcrumbs/model/breadcrumb';
import { HeaderComponent } from '../internal/header/header.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', (): void => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [
          HomeComponent,
          MockComponent(BreadcrumbsComponent),
          MockComponent(HeaderComponent),
        ],
      }).compileComponents();
    }
  );

  beforeEach((): void => {
    fixture = TestBed.createComponent(HomeComponent);
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
          isActive: true,
        },
      ];
      // when
      const breadcrumbs: BreadcrumbsComponent = fixture.debugElement.query(
        By.css('app-breadcrumbs')
      ).componentInstance;
      const header: HeaderComponent = fixture.debugElement.query(
        By.css('app-header')
      );
      // then
      expect(breadcrumbs).not.toBeNull();
      expect(breadcrumbs.breadcrumbs).toEqual(expectedBreadcrumbs);
      expect(header).not.toBeNull();
    });
  });
});
