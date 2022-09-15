import { Materias } from './../interfaces/materias';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  URL = 'http://localhost:3000/materias';
   /*URL = 'https://api-rest-colegio.herokuapp.com/cursos'*/;
  constructor(private http : HttpClient)  { }

  getMaterias(): Observable<Materias[]>{
    return this.http.get<Materias[]>(this.URL);
  }

  getIdMaterias(id:string): Observable<Materias[]>{
    return this.http.get<Materias[]>(this.URL+'/'+id);
  }

  postMaterias(materias:Materias)
  {
    return this.http.post(this.URL, materias).subscribe(
      res => console.log(res)
    )
  }

  deleteMaterias(id:string){
    return this.http.delete(this.URL+'/'+id)
  }

  putMaterias(id:string, materias:Materias){
    return this.http.put(this.URL+'/'+id, materias).subscribe(
      res => console.log(res)
    )
  }
}
