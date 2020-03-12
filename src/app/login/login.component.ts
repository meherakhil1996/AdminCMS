import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {url} from '../globals';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user_data: any[];
  public uname: string = "";
  public passkey: string = "";
  public result: string = "";

  constructor(private httpObj: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let url1:string = url+'account';
    this.httpObj.get(url1).subscribe((response:any[]) => {
      this.user_data = response;
    });
  }

  public onLogin():boolean{
    let str = this.route.snapshot.queryParams["redirectUrl"];

    if(str==null){
      str = "/";
    }

    if(this.user_data.find(item => item.username == this.uname)){
      if(this.user_data.find(item => item.username == this.uname).password == this.passkey){
        sessionStorage.setItem("AUTH_TOKEN", this.uname);
        console.log(url);
        this.router.navigate([str]);
        return true;
      }
      else{
        this.result = "Invalid Password";
        return false;
      }
    }
    else if(this.uname == ""){
      this.result = "Enter Username";
      return false;
    }
    else{
      this.result = "User not found!";
      return false;
    }
  }

}
