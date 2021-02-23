import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', (): void => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [BreadcrumbsComponent],
        imports: [RouterTestingModule],
      }).compileComponents();
    }
  );

  beforeEach((): void => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  describe('DOM', (): void => {
    it('should display breadcrumbs with expected properties', (): void => {
      // given
      const inactiveCrumbsLength: number = 2;
      component.breadcrumbs = [
        {
          title: 'Anything',
          routerLink: 'Anything',
        },
        {
          title: 'Anything',
          routerLink: 'Anything',
        },
        {
          title: 'Anything',
          routerLink: 'Anything',
          isActive: true,
        },
      ];
      // when
      fixture.detectChanges();
      const crumbsElement: DebugElement = fixture.debugElement.query(
        By.css('.breadcrumb')
      );
      const inactiveCrumbElement: DebugElement[] = fixture.debugElement.queryAll(
        By.css('.breadcrumb .crumb')
      );
      const activeCrumbElement: DebugElement[] = fixture.debugElement.queryAll(
        By.css('.breadcrumb .crumb-active')
      );
      // then
      expect(crumbsElement).not.toBeNull();
      expect(inactiveCrumbElement).not.toBeNull();
      expect(activeCrumbElement).not.toBeNull();
      expect(inactiveCrumbElement.length).toEqual(inactiveCrumbsLength);
      expect(activeCrumbElement.length).toEqual(1);
    });
  });
});
