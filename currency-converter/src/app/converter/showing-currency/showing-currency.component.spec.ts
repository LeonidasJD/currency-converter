import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingCurrencyComponent } from './showing-currency.component';

describe('ShowingCurrencyComponent', () => {
  let component: ShowingCurrencyComponent;
  let fixture: ComponentFixture<ShowingCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowingCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
