import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    productlist:any;
  constructor(private service:ApiserviceService,private cartservice:CartserviceService) { }

  ngOnInit(): void {
    this.service.getproducts()
    .subscribe((res)=>{
      this.productlist=res;
      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })

    })
    
  }
  addtocart(item:any){
this.cartservice.addProducts(item);

  }
  

}
