import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarsComponent } from './buy-cars-component';

describe('BuyCarsComponent', () => {
  let component: BuyCarsComponent;
  let fixture: ComponentFixture<BuyCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyCarsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
