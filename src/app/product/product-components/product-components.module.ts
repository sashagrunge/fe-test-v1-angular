import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSummaryBoxComponent } from './product-summary-box/product-summary-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductSummaryBoxComponent],
  exports: [ProductSummaryBoxComponent]
})
export class ProductComponentsModule { }