import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSummaryBoxComponent } from './product-summary-box.component';

describe('ProductSummaryBoxComponent', () => {
  let component: ProductSummaryBoxComponent;
  let fixture: ComponentFixture<ProductSummaryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSummaryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSummaryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
