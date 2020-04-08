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
  public uname:string = "";
  public passkey:string = "";
  public fname:string = "";
  public lname:string = "";
  public uaccess:string = "";
  public bool:boolean = false;
  public usermail:string = "";
  public usererror:boolean = false;
  public useradded:boolean = false;
  public result:string = "";
  public userId:number = null;

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

  public removeId(id:number){
    this.userId = id;
  }

  public saveDetails(){
    let url1 = url+"account/"+this.userId;
    
  }

  public deleteItem(){
    let url1 = url+"account/"+this.userId;
    this.httpObj.delete(url1).subscribe((response:any)=>{
      this.getUsers();
    })
  }

  public search(){

  }

  public addRow(){
    this.bool = true;
  }


  public cancelRow(){
    this.bool = false;
    this.uname = "";
    this.passkey = "";
    this.fname = "";
    this.lname = "";
  }

  public addUser(){
    let newUser:any = {};
    let userE:boolean = true;
    let emailE:boolean = true;
    let url1 = url+"account";
    this.uname.trim();
    this.passkey.trim();
    this.fname.trim();
    this.lname.trim();
    this.usermail.trim();

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    this.userlist.forEach(element => {
      if(element.username.toLowerCase()==this.uname.toLowerCase()){
        userE = false;
      }
    });
    this.userlist.forEach(element =>{
      if(element.email.toLowerCase() == this.usermail.toLowerCase()){
        emailE = false;
      }
    })
    if(!this.uname || !this.passkey || !this.fname || !this.lname || !this.usermail || !this.uaccess){
      this.result = "Fill all fields!";
      this.usererror = true;
    }
    else if(!userE && !emailE){
      this.result = "Username and Email already exists!";
      this.usererror = true;
    }
    else if(!userE){
      this.result = "Username already exists!";
      this.usererror = true;
    }
    else if(!emailE){
      this.result = "Email already exists!";
      this.usererror = true;
    }
    else if(!re.test(String(this.usermail).toLowerCase())){
      this.result = "Enter a valid Email!";
      this.usererror = true;
    }
    else {
      this.spinner.show();
      newUser.username = this.uname;
      newUser.password = this.passkey;
      newUser.email = this.usermail;
      newUser.firstname = this.fname;
      newUser.lastname = this.lname;
      newUser.access = this.uaccess;
      this.httpObj.post(url1,newUser).subscribe((response:any) => {
        this.result = "User added successfully!"
        this.useradded = true;
        this.uname = "";
        this.passkey = "";
        this.fname = "";
        this.lname = "";
        this.usermail = "";
        this.getUsers();
      });
    }
    
  }

}
