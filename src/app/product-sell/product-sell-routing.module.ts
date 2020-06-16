import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellProductComponent } from './sell-product/sell-product.component';
import { SoldListComponent } from './sold-list/sold-list.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {"path": "", children: [
    {"path": "create", component: SellProductComponent},
    {"path": "list", component: SoldListComponent},
    {"path": "invoice", component: InvoiceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSellRoutingModule { }
