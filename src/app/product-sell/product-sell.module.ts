import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ProductSellRoutingModule } from './product-sell-routing.module';
import { SellProductComponent } from './sell-product/sell-product.component';
import { SoldListComponent } from './sold-list/sold-list.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [SellProductComponent, SoldListComponent, InvoiceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductSellRoutingModule,
    FormsModule
  ]
})
export class ProductSellModule { }
