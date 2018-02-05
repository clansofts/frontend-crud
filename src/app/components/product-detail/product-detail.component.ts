import { Component, Inject } from '@angular/core';
import { ProductService } from '../../providers/product.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product;
  row;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private _productService: ProductService) {
    this.product = this.data.product;
    this.row = this.data.row;
  }

  updateProduct() {
    this._productService.updateProduct(this.product);
  }

  deleteProduct() {
    this._productService.deleteProduct(this.product.id);
  }

}
