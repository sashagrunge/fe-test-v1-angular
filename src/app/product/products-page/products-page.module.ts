import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { ProductsPageRoutingModule } from './products-page-routing.module';
// Module
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiModule } from '../../api/api.module';
import { AppFormModule } from '../../app-form/app-form.module';
import { ProductComponentsModule } from '../product-components/product-components.module';
// Component
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    MatProgressSpinnerModule,
    ApiModule,
    AppFormModule,
    ProductComponentsModule
  ],
  declarations: [ProductsPageComponent]
})
export class ProductsPageModule { }
