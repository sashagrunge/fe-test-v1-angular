import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { ProductRoutingModule } from './product-routing.module';
// Service
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [ ProductService ],
  declarations: []
})
export class ProductModule { }
