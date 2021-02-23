import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { BreadcrumbsComponent } from '../internal/breadcrumbs/breadcrumbs.component';
import { Breadcrumb } from '../internal/breadcrumbs/model/breadcrumb';
import { RegionalComponent } from './regional.component';

describe('RegionalComponent', (): void => {
  let component: RegionalComponent;
  let fixture: ComponentFixture<RegionalComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [RegionalComponent, MockComponent(BreadcrumbsComponent)],
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
        },
      ];
      // when
      const breadcrumbs: BreadcrumbsComponent = fixture.debugElement.query(
        By.css('app-breadcrumbs')
      ).componentInstance;
      // then
      expect(breadcrumbs).not.toBeNull();
      expect(breadcrumbs.breadcrumbs).toEqual(expectedBreadcrumbs);
    });
  });
});
