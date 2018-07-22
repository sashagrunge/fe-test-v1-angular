import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError } from 'rxjs/operators/catchError';
import { shareReplay } from 'rxjs/operators/shareReplay';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { ProductService } from '../../product.service';
import { Product, ProductFilterOption } from '../../models';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public productsCache: Product[];
  public filters: ProductFilterOption = new ProductFilterOption();
  public products$: Observable<Product[]>;
  public applyFilters$ = new Subject<void>();
  public isApiError = false;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  public loadProducts(): void {
    // Api response
    const apiResponse$ =
          this.productService
          .getProducts()
          .pipe(
            shareReplay(), // Important, avoid multiple call to server
            catchError((error) => {
              this.handleApiError();
              return Observable.throw(error);
            })
          );
    // Update product list
    // TODO merge pageUpdate$ for pagination, update slice from productService in the last map()
    // IMPROVE merge applySort$ for sorting, add sort function from productService in the last map()
    this.products$ =
      this.applyFilters$
      .pipe(
        switchMap(() => apiResponse$), // Get products
        map((response) => this.productService.filterProducts(response, this.filters)) // updates
      );
  }

  public onFilterNameChange(data: string): void {
    // IMPROVE maybe a nameAndCode options is better
    // IMPROVE use from with valueChanges
    this.filters.name = data;
    this.filters.code = data;
    this.applyFilters$.next();
  }

  /*** Private ***/
  private handleApiError(): void {
    this.isApiError = true;
  }

}
