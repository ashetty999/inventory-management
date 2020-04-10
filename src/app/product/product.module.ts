import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [EditProductComponent, ],
  exports: [ProductComponent],
  declarations: [ProductListComponent, NewProductComponent, ProductComponent, EditProductComponent]
})
export class ProductModule { }
