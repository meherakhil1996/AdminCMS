import { Pipe, PipeTransform } from '@angular/core';
import { url } from './globals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './productInter';

@Pipe({
  name: 'productname'
})
export class ProductnamePipe implements PipeTransform {

  public output$:Observable<string>;
  public outputResp$:Observable<IProduct>;

  constructor(private httpObj:HttpClient){}

  transform(input:number): Observable<string> {
    this.getProducts(input);
    console.log(this.output$);
    return this.output$;
  }

  public getProducts(id:number){
    let url1 = url + "products/";
    let orl:string="";
    this.outputResp$ = this.httpObj.get<IProduct>(url1+id);
  }

}
