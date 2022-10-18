import { SecurityService, Usuario } from './services/security.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private securityService:SecurityService, private router:Router){}

    canActivate(): boolean{
      if(!this.securityService.logedIn()){
  
        this.router.navigate(['/login']);
        alert('necesita registrarse')
        return false;
       
      }
  //  this.router.navigate(['/login']);
    return true;
  }
   

}
