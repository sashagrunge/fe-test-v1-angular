import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { Product, ProductFilterOption } from './models';

@Injectable()
export class ProductService {

  constructor(
    private api: ApiService
  ) {}

  /*
   * Get product list
   */
  public getProducts(): Observable<Product[]> {

    const path = '';
    return this.api.request( {
      path,
      method: 'GET'
    } );
  }
  /*
   * Filter products by options
   * TODO Test different name case
   * IMPROVE Add filter options and different combination
   * e.g by Brand, Type, Plan, Code only
   */
  public filterProducts(products: Product[], options: ProductFilterOption): Product[] {
    let result = products;
    if (!result) {
      // Invalid products to filter
      return result;
    }
    // Name
    if (options.name) {
      const regex = new RegExp(options.name, 'i');
      result = products.filter((product) => regex.test(product.name));
    }
    if (options.code) {
      const regex = new RegExp(options.name, 'i');
      result = result.concat(products.filter((product) => regex.test(product.code)));
    }
    return result;
  }

}
