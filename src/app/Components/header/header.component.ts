import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemNumber = 0;
  constructor(private cartapi:CartapiService) { }

  ngOnInit(): void {
  //   this.cartapi.getProductData().subscribe(response => {
  //     console.log("cartlength",this.cartapi.cartLength)
  //     this.totalItemNumber = this.cartapi.cartLength;
  //   console.log(this.totalItemNumber);
  // })
  // console.log("header component",this.cartapi.cartLength)

  // this.totalItemNumber =  this.cartapi.cartLength

  this.cartapi.cartLnegthSubject.subscribe((count)=>{
    this.totalItemNumber = count;
    console.log(count)
  })
}

  
  
}
