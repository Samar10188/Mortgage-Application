import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { IBuyer } from '../Interfaces/IBuyer';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {

  customerForm: FormGroup;
  pageTitle: String = "Enter Customer Details";
  // itemWeight: Array<{serial: number}> = [];
  itemWeight: number;
  metalPrice: number;
  labourCharge: number;
  productPrice: number;

  customer: IBuyer = {
    _id: null,
    date: null,
    custName: null,
    relation: null,
    relative: null,
    district: null,
    village: null,
    phone: null,
    ornaments: [],
    soldMetal: []
  };
  total: any;

  constructor(private fb: FormBuilder,
              private router: Router
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      date: ['01/01/2019'],
      custName: [''],
      relation: ['S/O'],
      relative: [''],
      district: [''],
      village: [''],
      phone: [''],
      ornaments: this.fb.array([
        this.addOrnamentsFormGroup()
      ]),
      soldMetal: this.fb.array([])

    });

  }

  addOrnamentsFormGroup(): FormGroup {
    return this.fb.group({
      metal: [''],
      ornament: [''],
      weight: [''],
      priceOfMetal: [''],
      labourCharge: ['0'],
      rupees: ['']
    });
  }

  get ornamentsArray() {
    return <FormArray>this.customerForm.get('ornaments').value;
  }

  addSoldMetalFormGroup(): FormGroup {
    return this.fb.group({
      metal: [''],
      weight: [''],
      percent: [''],
      priceOfMetal: [''],
      amount: ['']  
    });
  }

  soldMetalArray() {
    return <FormArray>this.customerForm.get('soldMetal').value;
  }

  addOrnamentButtonClick(): void {
    (<FormArray>this.customerForm.get('ornaments')).push(this.addOrnamentsFormGroup());
  }

  addSoldMetalButtonClick(): void {
    (<FormArray>this.customerForm.get('soldMetal')).push(this.addSoldMetalFormGroup());
  }

  removeOrnamentButtonClick(ornamentGroupIndex: number): void {
    const ornamentFormArray = <FormArray>this.customerForm.get('ornaments');
    ornamentFormArray.removeAt(ornamentGroupIndex);
    ornamentFormArray.markAsTouched();
    ornamentFormArray.markAsDirty();
  }

  removeSoldMetalButtonClick(ornamentGroupIndex: number): void {
    const ornamentFormArray = <FormArray>this.customerForm.get('soldMetal');
    ornamentFormArray.removeAt(ornamentGroupIndex);
    ornamentFormArray.markAsTouched();
    ornamentFormArray.markAsDirty();
  }

  productPriceCalculation(i){
    // this.productPrice = (((this.itemWeight/10)*this.metalPrice) + this.labourCharge);
    // console.log("total :", this.productPrice);
    console.log("total :", this.itemWeight);
    // this.productPrice.
  }  

  onSubmit(){
    this.mapFormValuesTocustomerModel();
    console.log("Buyer data", this.customer);
    sessionStorage.removeItem("customerData");
    sessionStorage.setItem("customerData", JSON.stringify(this.customer));
    this.router.navigate(["home/sell-product/invoice"]);
  }

  mapFormValuesTocustomerModel() {
    this.customer.date = this.customerForm.value.date;
    this.customer.custName = this.customerForm.value.custName;
    this.customer.relation = this.customerForm.value.relation;
    this.customer.relative = this.customerForm.value.relative;
    this.customer.district = this.customerForm.value.district;
    this.customer.village = this.customerForm.value.village;
    this.customer.phone = this.customerForm.value.phone;
    this.customer.ornaments = this.customerForm.value.ornaments;
    console.log("ornaments array", this.customer.ornaments);
    this.customer.soldMetal = this.customerForm.value.soldMetal;
    console.log("soldmetal array", this.customer.soldMetal);
  }
}
