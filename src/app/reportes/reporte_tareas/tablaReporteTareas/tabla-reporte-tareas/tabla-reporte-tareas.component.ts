import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EntregaTareasService } from 'src/app/services/entrega-tareas.service';
import { EntregaTareas } from 'src/app/interfaces/entrega_tareas';

@Component({
  selector: 'app-tabla-reporte-tareas',
  templateUrl: './tabla-reporte-tareas.component.html',
  styleUrls: ['./tabla-reporte-tareas.component.css']
})
export class TablaReporteTareasComponent implements OnInit {

  ListarEntregaTareas!: EntregaTareas[];
  constructor(private entregaTareasService:EntregaTareasService, private router:Router) { }

  ngOnInit(): void {
    this.listarEntregaTareas();
  }

  listarEntregaTareas(){

    this.entregaTareasService.getEntregaTareas().subscribe(
      res=>{
        console.log(res)
        this.ListarEntregaTareas=<any>res;
      },
      err=> console.log(err)

    );

  }
  



  agregar(){
    this.router.navigate(["agregarEntregaTareas"])

    }
    actualizar(){
      setTimeout(location.reload.bind(location),100);
    }
}
