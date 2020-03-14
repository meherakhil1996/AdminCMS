import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  public user:string = "";
  constructor(private router: Router) { }

  // Checks whether user is already logged in or not for a secured link. If not redirects to login page
  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(sessionStorage.getItem("AUTH_TOKEN")==null){
      this.router.navigate(["/login"], {queryParams: {requestUrl:state.url}});
      return false;
    }
    else{
      return true;
    }
  }

  public onLogout(){
    sessionStorage.removeItem("AUTH_TOKEN")
    this.router.navigate(["/login"])
  }

  public authUser(user:string){
    this.user = user;
  }
}
