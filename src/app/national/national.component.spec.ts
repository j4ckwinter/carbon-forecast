import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalComponent } from './national.component';

describe('NationalComponent', (): void => {
  let component: NationalComponent;
  let fixture: ComponentFixture<NationalComponent>;

  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        declarations: [NationalComponent],
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
});
