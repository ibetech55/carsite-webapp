import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFilters } from './model-filters';

describe('ModelFilters', () => {
  let component: ModelFilters;
  let fixture: ComponentFixture<ModelFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
