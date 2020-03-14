import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { AuthgaurdService } from '../authgaurd.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user:string = "";

  constructor(public nav : NavbarService, private auth : AuthgaurdService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("AUTH_TOKEN");
    if(this.user){
      this.nav.show();
    }
    else{
      this.nav.hide();
    }
  }

  public logout(){
    this.auth.onLogout();
    this.ngOnInit();
  }

}
