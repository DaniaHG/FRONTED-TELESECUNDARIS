import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './services/security.service';

import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {


  constructor(private securityService:SecurityService, private router:Router){}

// constructor(private router: Router, private securityService: securityService) {}
  

  canActivate(route:ActivatedRouteSnapshot):boolean {

  
   
  const user = this.securityService.userValue;

  if (user) {
    if (route.data.roles && route.data.roles.indexOf(user.rol) === -1) {
        this.router.navigate(['/'])
        return false;
    }
    return true;




  }
  return true;

  }
}
