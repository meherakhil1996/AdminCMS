import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../globals';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders:any[]=[];
  public products:any[]=[]
  public bool:boolean = false;
  public searchTxt:string = "";

  constructor(private httpObj: HttpClient, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders(){
    this.spinner.show();
    let url1:string = url+"orders";
    this.httpObj.get(url1).subscribe((response:any[]) => {
      this.orders = response;
      // this.getOrderDetails();
      this.spinner.hide();
    });
  }

  // public getOrderDetails(){
  //   let url2 = url+"products/";
  //   let i:number = 0;
  //   let j:number = 0;
  //   this.orders.forEach(e => {
  //     i=0;
  //     e.products.forEach(element => {
  //       this.httpObj.get(url2+ element.product_id).subscribe((response:any) => {
  //         this.orders.find(item => item.order_id == e.order_id).orderDetails[i].push(response);
  //         i += 1;
  //         console.log(this.orders[j].orderDetails[1])
  //       })
  //     });
  //     j += 1;
  //   })
    
  // }
  

  public search(){

  }

}
