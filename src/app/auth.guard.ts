import { SecurityService } from './services/security.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private securityService:SecurityService, private router:Router){}

    canActivate(): boolean{
      if(!this.securityService.logedIn()){
        console.log('token no es valido o ya expiro')
        this.router.navigate(['/login']);
        return false;
      }
  //  this.router.navigate(['/login']);
    return true;
  }


}
