import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-product-summary-box',
  templateUrl: './product-summary-box.component.html',
  styleUrls: ['./product-summary-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSummaryBoxComponent implements OnInit {

  @Input() product: Product;
  public readonly detailsDefinition: {[key: string]: string}[] = [
    { key: 'code', title: 'Code' },
    { key: 'make', title: 'Brand' },
    { key: 'model', title: 'Model' },
    { key: 'type', title: 'Type' },
    { key: 'tar_code', title: 'Tar code' },
    { key: 'tar_name', title: 'Tar name' },
    { key: 'tar_minutes', title: 'Tar minutes' },
    { key: 'tar_sms', title: 'Tar sms' },
    { key: 'tar_data', title: 'Tar data' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
