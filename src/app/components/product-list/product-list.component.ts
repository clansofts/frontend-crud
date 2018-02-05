import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../providers/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns = ['nombre', 'descripcion', 'estado', 'cantidad'];
  dataSource = new MatTableDataSource();
  productsCopy: Product[];
  loadData: boolean = false;


  constructor(private _productService: ProductService,
              public dialog: MatDialog){
    this._productService.getProducts().subscribe( data => {
      this.dataSource.data = data;
      this.loadData = true;
    });
   }
  
  ngOnInit() {

  }

  detailProduct(data) {
    let dialogRef = this.dialog.open(ProductDetailComponent, {
      data: {
        product: data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productsCopy = this.dataSource.data;
        let index = this.productsCopy.findIndex(element => element.id === result);
          this.dataSource.data.splice(index, 1);
        this.dataSource.filter = '';
      }
    });
  }

  addProduct() {
    let dialogRef = this.dialog.open(AddProductComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let product;
        this._productService.addProduct(result).subscribe((data) => {
          this.dataSource.data.push(data);
          this.dataSource.filter = '';
        });
      }
    });
  }
}