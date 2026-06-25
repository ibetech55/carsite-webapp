import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeFilter } from './make-filter';

describe('MakeFilter', () => {
  let component: MakeFilter;
  let fixture: ComponentFixture<MakeFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
