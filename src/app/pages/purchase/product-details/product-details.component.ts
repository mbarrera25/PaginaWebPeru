import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  constructor(
    public purchaseService: PurchaseService
  ){}
  ngOnInit(): void {


  }

}
