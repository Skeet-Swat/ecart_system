import { HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
cardListData: any = [];
cartLength: number = 0;
cartLnegthSubject =  new Subject<number>()
productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClientJsonpModule) { }

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product: any){
    this.cardListData.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any){
    this.cardListData.push(product);
    this.productList.next(product);
    this.cartLength = this.cardListData.length;
    this.cartLnegthSubject.next(this.cartLength)
    this.getTotalAmount();
    console.log("cart api service",this.cardListData.length);
  }
  getTotalAmount(){
    let grandTotal = 0;
    this.cardListData.map((a: any) => {
      grandTotal += a.total;
    });
  }
  removeCardData(product: any){
    this.cardListData.map((a: any, index: number) => {
      if(product.id === a.id){
        this.cardListData.splice(index,1);
      }
    })
  }

  removeAllData(){
    this.cardListData = [];
    this.productList.next(this.cardListData);
  }
}