import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   public totalitem:number=0;
  constructor(private cartservice:CartserviceService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe((res:any)=>{
      this.totalitem=res.length;
    })
  }

}
