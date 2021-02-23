import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { BreadcrumbsComponent } from '../internal/breadcrumbs/breadcrumbs.component';
import { Breadcrumb } from '../internal/breadcrumbs/model/breadcrumb';
import { NationalComponent } from './national.component';

describe('NationalComponent', (): void => {
  let component: NationalComponent;
  let fixture: ComponentFixture<NationalComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [NationalComponent, MockComponent(BreadcrumbsComponent)],
      }).compileComponents();
    }
  );

  beforeEach((): void => {
    fixture = TestBed.createComponent(NationalComponent);
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
          title: 'National',
          routerLink: '/national',
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
