import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './services/security.service';

import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {



  canActivate() {
     
    let roleId= localStorage.getItem ("userType");

    if (roleId == "admin"){
        return true

    }
     alert("NO Autorizado Para la Vista")
     return false;
 }


 
}