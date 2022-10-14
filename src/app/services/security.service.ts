import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private URL = "http://localhost:3000";
  userValue: any;
  constructor(private http : HttpClient,
    private jwHelper: JwtHelperService) { }

  login(user: Usuario ){
    return this.http.post<any>(this.URL + '/usuarios',user);
  }

  logout(){
    localStorage.removeItem('token');
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isAuth():boolean{
    const token =  localStorage.getItem('token')
    if(this.jwHelper.isTokenExpired('token')||!localStorage.getItem('token')){

      return false;
    }
    return true;
  }

}

export interface Usuario {
  id:number;
  userName:string;
  pass:string;
  roleId:string;
  
}
