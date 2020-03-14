import { Component, OnInit } from '@angular/core';
import { url } from '../globals'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public fname:string = "";
  public lname:string = "";
  public email:string = "";
  public uname:string = "";
  public pwd:string = "";
  public cpwd:string = "";

  constructor(private httpObj : HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  public signUp(){

  }

}
