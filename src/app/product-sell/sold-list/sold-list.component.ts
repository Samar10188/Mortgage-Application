import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sold-list',
  templateUrl: './sold-list.component.html',
  styleUrls: ['./sold-list.component.css']
})
export class SoldListComponent implements OnInit {

  metal: any;
  ornament: any;
  weight = [10,"22","334","212"];
  priceOfMetal: [];
  labourcharge: [];
  rupees: [];

  constructor() { }

  ngOnInit() {
    console.log("weight at 0 place", this.weight[0]);
  }

  onSubmit(){
    console.log("ornaments", this.ornament);
    // console.log("metal", this.metal);
    // console.log("weight", this.weight);
    // console.log("labourcharge", this.labourcharge);
    // console.log("rupees", this.rupees);
  }

}
