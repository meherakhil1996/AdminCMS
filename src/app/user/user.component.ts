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

  constructor(private httpObj: HttpClient, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(){
    this.spinner.show();
    let url1 = url + "account"
    console.log(url1);
    this.httpObj.get(url1).subscribe((response:any[]) => {
      this.userlist = response;
      this.spinner.hide();
    });
  }

}
