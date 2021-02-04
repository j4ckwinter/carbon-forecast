import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', (): void => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const routeParams: NavigationBehaviorOptions = {
    skipLocationChange: false,
    replaceUrl: false,
    state: undefined,
  };

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        imports: [RouterTestingModule],
      }).compileComponents();
    }
  );

  beforeEach((): void => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  describe('DOM', (): void => {
    describe('elements', (): void => {
      it('page should have expected elements', (): void => {
        // given
        const navbarMenuItems: number = 3;
        const buttonLength: number = 2;
        // when
        fixture.detectChanges();
        const navbar: DebugElement = fixture.debugElement.query(
          By.css('.navbar')
        );
        const navbarMenu: DebugElement = fixture.debugElement.query(
          By.css('.navbar .navbar-menu')
        );
        const navbarStart: DebugElement = fixture.debugElement.query(
          By.css('.navbar .navbar-menu .navbar-start')
        );
        const navbarEnd: DebugElement = fixture.debugElement.query(
          By.css('.navbar .navbar-menu .navbar-end')
        );
        const navbarBrandIcon: DebugElement = fixture.debugElement.query(
          By.css('.navbar .navbar-brand .navbar-item')
        );
        const navbarMenuItemElements: DebugElement[] = fixture.debugElement.queryAll(
          By.css('.navbar .navbar-menu .navbar-start .navbar-item')
        );
        const buttonElements: DebugElement[] = fixture.debugElement.queryAll(
          By.css('.button')
        );
        // then
        expect(navbar).not.toBeNull();
        expect(navbarMenu).not.toBeNull();
        expect(navbarStart).not.toBeNull();
        expect(navbarEnd).not.toBeNull();
        expect(navbarBrandIcon).not.toBeNull();
        expect(navbarMenuItemElements.length).toEqual(navbarMenuItems);
        expect(buttonElements.length).toEqual(buttonLength);
      });
    });
  });

  describe('navigation', (): void => {
    it('it should navigate to home component', (): void => {
      // given
      const menuItemElementIndex: number = 0;
      const router: Router = TestBed.inject(Router);
      const url: string = '/home';
      const navbarMenuItemElements: DebugElement[] = fixture.debugElement.queryAll(
        By.css('.navbar .navbar-menu .navbar-start .navbar-item')
      );
      spyOn(router, 'navigateByUrl');
      // when
      navbarMenuItemElements[menuItemElementIndex].nativeElement.click();
      // then
      expect(router.navigateByUrl).toHaveBeenCalledWith(
        router.createUrlTree([url]),
        routeParams
      );
    });
    it('it should navigate to national component', (): void => {
      // given
      const menuItemElementIndex: number = 1;
      const router: Router = TestBed.inject(Router);
      const url: string = '/national';
      const navbarMenuItemElements: DebugElement[] = fixture.debugElement.queryAll(
        By.css('.navbar .navbar-menu .navbar-start .navbar-item')
      );
      spyOn(router, 'navigateByUrl');
      // when
      navbarMenuItemElements[menuItemElementIndex].nativeElement.click();
      // then
      expect(router.navigateByUrl).toHaveBeenCalledWith(
        router.createUrlTree([url]),
        routeParams
      );
    });
    it('it should navigate to regional component', (): void => {
      // given
      const menuItemElementIndex: number = 2;
      const router: Router = TestBed.inject(Router);
      const url: string = '/regional';
      const navbarMenuItemElements: DebugElement[] = fixture.debugElement.queryAll(
        By.css('.navbar .navbar-menu .navbar-start .navbar-item')
      );
      spyOn(router, 'navigateByUrl');
      // when
      navbarMenuItemElements[menuItemElementIndex].nativeElement.click();
      // then
      expect(router.navigateByUrl).toHaveBeenCalledWith(
        router.createUrlTree([url]),
        routeParams
      );
    });
  });
});
