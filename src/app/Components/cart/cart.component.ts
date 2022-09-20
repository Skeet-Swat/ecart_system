import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any = [];
  allProduct: any =0;
  constructor(private cart: CartapiService) { }

  ngOnInit(): void {
    this.cart.getProductData().subscribe(res => {
      this.product = res;
      this.allProduct = this.cart.getTotalAmount();
    })
  }
  removeItem(item: any){
    this.cart.removeCardData(item);
  }
  removeAllProduct(){
    this.cart.removeAllData()
  }

}
