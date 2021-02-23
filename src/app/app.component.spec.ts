import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { HeaderComponent } from './internal/header/header.component';

describe('AppComponent', (): void => {
  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent, MockComponent(HeaderComponent)],
      }).compileComponents();
    }
  );

  it('should create the app', (): void => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent
    );
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
