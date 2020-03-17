import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { AuthgaurdService } from '../authgaurd.service';
import {url} from '../globals';
import { Validators, FormGroup, FormControl } from '@angular/forms';


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
  public hide:boolean = true;

  constructor(private httpObj: HttpClient, private router: Router, private route: ActivatedRoute,
    private nav: NavbarService, private auth: AuthgaurdService) { }

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

    let user:boolean = this.user_data.find(item => item.username == this.uname);
    let email:boolean = this.user_data.find(item => item.email == this.uname);
    if(!user&&!email){
      this.result = "Invalid Username/Email";
      return false;
    }
    if(user){
      if(this.user_data.find(item => item.username == this.uname).password == this.passkey){
        sessionStorage.setItem("AUTH_TOKEN", this.uname);
        this.router.navigate([str]);
        this.nav.show();
        this.auth.authUser(this.uname);
        return true;
      }
      else{
        this.result = "Invalid Password";
        return false;
      }
    }
    if(email){
      if(this.user_data.find(item => item.email == this.uname).password == this.passkey){
        sessionStorage.setItem("AUTH_TOKEN", this.user_data.find(item => item.email == this.uname).username);
        this.router.navigate([str]);
        this.nav.show();
        this.auth.authUser(this.user_data.find(item => item.email == this.uname).username);
        return true;
      }
      else{
        this.result = "Invalid Password";
        return false;
      }
    }
  }

  public pwdForm:FormGroup = new FormGroup({
    pass: new FormControl(null, Validators.required)
  });

  public unameForm:FormGroup = new FormGroup({
    usern: new FormControl(null, Validators.required)
  })

}
