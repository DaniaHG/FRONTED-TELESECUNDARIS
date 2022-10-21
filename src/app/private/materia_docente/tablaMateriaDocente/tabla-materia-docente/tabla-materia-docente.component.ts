import { MateriaDocente } from './../../../../interfaces/materia-docente';
import { MateriaDocenteService } from './../../../../services/materia-docente.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-materia-docente',
  templateUrl: './tabla-materia-docente.component.html',
  styleUrls: ['./tabla-materia-docente.component.css']
})
export class TablaMateriaDocenteComponent implements OnInit {

  ListarMateriasDocente!: MateriaDocente[];
  constructor(private materiasDocenteService:MateriaDocenteService, private router:Router) { }

  ngOnInit(): void {
    this.listarMateriasDocente();
  }

  listarMateriasDocente(){

    this.materiasDocenteService.getMateriaDocente().subscribe(
      res=>{
        console.log(res)
        this.ListarMateriasDocente=<any>res;
      },
      err=> console.log(err)

    );

  }
  eliminar(id:string){
    this.materiasDocenteService.deleteMateriaDocente(id).subscribe(
      res=>{
        console.log('Eliminado');

        this.router.navigate(['/mostrarMateriasDocentes']);


      },
      err=> console.log(err));
      setTimeout(location.reload.bind(location),500);
  }

  modificar(id:string){
    this.router.navigate(['modificarMateriasDocente',id])
  }

  agregar(){
    this.router.navigate(["agregarMateriasDocente"])

    }
    actualizar(){
      setTimeout(location.reload.bind(location),100);
    }

}

