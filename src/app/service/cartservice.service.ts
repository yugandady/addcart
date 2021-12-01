import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
   public cartitem :any=[]
   public products=new BehaviorSubject([])
  constructor() { }
  getProducts(){
    return this.products.asObservable();
  }
  setProducts(product:any){
    this.cartitem.push(...product)
    this.products.next(product)
  }
  addProducts(product:any){
    this.cartitem.push(product)
    this.products.next(this.cartitem);
    console.log(this.cartitem)
    this.getTotalPrice();
  }
  getTotalPrice():number{
    let grandtotal=0;
    this.cartitem.map((a:any)=>{
      grandtotal +=a.total;
    })
    return grandtotal;
  }
  removecart(product:any){
    this.cartitem.map((a:any,index:any)=>{
     if(product.id===a.id){
       this.cartitem.splice(index,1)
     }
    })
    return this.products.next(this.cartitem)
  }
  removeall(){
    this.cartitem=[];
    this.products.next(this.cartitem);
  }

}
