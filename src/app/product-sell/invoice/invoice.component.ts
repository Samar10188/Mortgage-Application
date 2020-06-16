import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  customer: any;
  value: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('customerData'));
    console.log("Customer data :", this.customer );
  }

}
