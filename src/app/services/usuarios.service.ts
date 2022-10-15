import { Observable } from 'rxjs';
import { Usuarios } from './../interfaces/usuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = 'http://localhost:3000/usuarios';
   /*URL = 'https://api-rest-colegio.herokuapp.com/cursos'*/;
  constructor(private http : HttpClient)  { }

  getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL);
  }

  getIdUsuarios(id:string): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL+'/'+id);
  }

  postUsuarios(usuarios:Usuarios)
  {
    return this.http.post(this.URL, usuarios).subscribe(
      res => console.log(res)
    )
  }

  deleteUsuarios(id:string){
    return this.http.delete(this.URL+'/'+id)
  }

  putUsuarios(id:string, usuarios:Usuarios){
    return this.http.put(this.URL+'/'+id, usuarios).subscribe(
      res => console.log(res)
    )
  }
}
