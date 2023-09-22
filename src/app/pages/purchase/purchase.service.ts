import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iProduct } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  productDetail= new BehaviorSubject<iProduct | null>(null)
  constructor() { }
}
