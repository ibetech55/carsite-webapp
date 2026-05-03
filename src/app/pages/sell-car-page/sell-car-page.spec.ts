import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarPage } from './sell-car-page';

describe('SellCarPage', () => {
  let component: SellCarPage;
  let fixture: ComponentFixture<SellCarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
