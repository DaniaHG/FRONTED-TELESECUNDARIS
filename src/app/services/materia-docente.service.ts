import { Observable } from 'rxjs';
import { MateriaDocente } from './../interfaces/materia-docente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriaDocenteService {

  URL = 'http://localhost:3000/materia_docente';
   /*URL = 'https://api-rest-colegio.herokuapp.com/cursos'*/;
  constructor(private http : HttpClient)  { }

  getMateriaDocente(): Observable<MateriaDocente[]>{
    return this.http.get<MateriaDocente[]>(this.URL);
  }

  getIdMateriaDocente(id:string): Observable<MateriaDocente[]>{
    return this.http.get<MateriaDocente[]>(this.URL+'/'+id);
  }

  postMateriaDocente(materiasDocente:MateriaDocente)
  {
    return this.http.post(this.URL, materiasDocente).subscribe(
      res => console.log(res)
    )
  }

  deleteMateriaDocente(id:string){
    return this.http.delete(this.URL+'/'+id)
  }

  putMateriaDocente(id:string, materiasDocente:MateriaDocente){
    return this.http.put(this.URL+'/'+id, materiasDocente).subscribe(
      res => console.log(res)
    )
  }
}
