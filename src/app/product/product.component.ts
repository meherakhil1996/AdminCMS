import { Component, OnInit } from '@angular/core';
import {url} from '../globals';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
// import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products:any[] = [];
  public bool:boolean = false;
  constructor(private httpObj : HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.spinner.show();
    let url1 = url + "products";
    this.httpObj.get(url1).subscribe((response:any[]) => {
      this.products = response;
      this.spinner.hide();
    })
  }

  public saveDetails(id:number){
    let url1 = url + "products/"+id;
  }

  public deleteItem(){

  }

}
