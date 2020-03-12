import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

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
}
