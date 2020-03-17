import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { url } from '../globals'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userlist:any[] = [];
  public searchTxt:string = "";
  public searchSelect:string = "";
  public userGroup:any[] = [];
  public groupSelect:number = null;

  constructor(private httpObj: HttpClient, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getUserGroup();
  }

  public getUserGroup(){
    let url1 = url+"usergroup";
    this.httpObj.get(url1).subscribe((response:any[]) => {
      this.userGroup = response;
    })
  }
  public getUsers(){
    this.spinner.show();
    let url1 = url + "account";
    this.httpObj.get(url1).subscribe((response:any[]) => {
      this.userlist = response;
      this.spinner.hide();
    });
  }

  public saveDetails(id:number){

  }

  public deleteItem(id:number){

  }

  public search(){

  }

}
