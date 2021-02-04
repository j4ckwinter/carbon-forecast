import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalComponent } from './regional.component';

describe('RegionalComponent', (): void => {
  let component: RegionalComponent;
  let fixture: ComponentFixture<RegionalComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [RegionalComponent],
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
});
