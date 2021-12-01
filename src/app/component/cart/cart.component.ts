import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   public product:any=[]
    public total!:number;
  constructor(private cartservices:CartserviceService) { }

  ngOnInit(): void {
    this.cartservices.getProducts()
    .subscribe((res:any)=>{
      this.product=res
      this.total=this.cartservices.getTotalPrice();
    })
  }
removecart(item:any){
this.cartservices.removecart(item);
}
}
