import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map }  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private api:HttpClient) { }
  getproducts(){
    return this.api.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
