import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarCommentForm } from './sell-car-comment-form';

describe('SellCarCommentForm', () => {
  let component: SellCarCommentForm;
  let fixture: ComponentFixture<SellCarCommentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarCommentForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarCommentForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
