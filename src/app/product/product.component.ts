import { Component, OnInit, ViewChild } from '@angular/core';
import {url} from '../globals';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products:any[] = [];
  public bool:boolean = false;
  public searchSelect:string = "";
  public searchTxt:string = "";

  listData:MatTableDataSource<any>;
  displayedColumns:string[] = ['id', 'product', 'category', 'stock', 'price', 'publish'];

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpObj : HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getProducts();
    
  }

  public getProducts(){
    this.spinner.show();
    let url1 = url + "products";
    this.httpObj.get(url1).subscribe((response:any[]) => {
      this.products = response;
      this.listData = new MatTableDataSource(this.products);
      this.listData.paginator = this.paginator;
      this.listData.sort = this.sort;
      this.spinner.hide();
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  public saveDetails(id:number){
    let url1 = url + "products/"+id;
  }

  public deleteItem(id:number){

  }

  public search(){
    
  }

}
