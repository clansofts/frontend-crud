import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductService } from './providers/product.service';

//material angular
import { MatTableModule,
         MatDialogModule,
         MatInputModule,
         MatCheckboxModule,
         MatButtonModule,
         MatIconModule,
         MatToolbarModule,
         MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent
  ],
  entryComponents: [
    ProductDetailComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
