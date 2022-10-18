import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleuserGuard implements CanActivate {
 
  
  canActivate() {
     
    let roleId= localStorage.getItem ("userType");

    if (roleId == "user"){
        return true

    }
   alert("NO Autorizado Para la Vista")
     return false;
 }


 
}