import { Router } from '@angular/router';
import { MateriasService } from './../../../services/materias.service';
import { Materias } from './../../../interfaces/materias';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-materias',
  templateUrl: './tabla-materias.component.html',
  styleUrls: ['./tabla-materias.component.css']
})
export class TablaMateriasComponent implements OnInit {

  ListarMaterias!: Materias[];
  constructor(private materiasService:MateriasService, private router:Router) { }

  ngOnInit(): void {
    this.listarMaterias();
  }

  listarMaterias(){

    this.materiasService.getMaterias().subscribe(
      res=>{
        console.log(res)
        this.ListarMaterias=<any>res;
      },
      err=> console.log(err)

    );

  }
  eliminar(id:string){
    this.materiasService.deleteMaterias(id).subscribe(
      res=>{
        console.log('Eliminado');

        this.router.navigate(['/mostrarDocentes']);


      },
      err=> console.log(err));
      setTimeout(location.reload.bind(location),500);
  }

  modificar(id:string){
    this.router.navigate(['modificarMaterias',id])
  }

  agregar(){
    this.router.navigate(["agregarMaterias"])

    }
    actualizar(){
      setTimeout(location.reload.bind(location),100);
    }

}
