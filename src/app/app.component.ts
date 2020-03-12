import { Component, OnInit } from '@angular/core';
import * as myglobals from './globals'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AdminCMS';
  public user:string="";

  ngOnInit(): void {
    this.user=sessionStorage.getItem("AUTH_TOKEN");
  }

}
