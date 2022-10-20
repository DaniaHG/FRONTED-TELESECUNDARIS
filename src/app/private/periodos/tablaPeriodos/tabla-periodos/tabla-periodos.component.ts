import { Router } from '@angular/router';
import { PeriodosService } from 'src/app/services/periodos.service';
import { Periodos } from 'src/app/interfaces/periodos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-periodos',
  templateUrl: './tabla-periodos.component.html',
  styleUrls: ['./tabla-periodos.component.css']
})
export class TablaPeriodosComponent implements OnInit {

  ListarPeriodos!: Periodos[];
  constructor(private periodosService:PeriodosService, private router:Router) { }

  ngOnInit(): void {
    this.listarPeriodos();
  }

  listarPeriodos(){

    this.periodosService.getPeriodos().subscribe(
      res=>{
        console.log(res)
        this.ListarPeriodos=<any>res;
      },
      err=> console.log(err)

    );

  }
  eliminar(id:string){
    this.periodosService.deletePeriodos(id).subscribe(
      res=>{
        console.log('Eliminado');

        this.router.navigate(['/mostrarPeriodos']);


      },
      err=> console.log(err));
      setTimeout(location.reload.bind(location),500);
  }

  modificar(id:string){
    this.router.navigate(['modificarPeriodos',id])
  }

  agregar(){
    this.router.navigate(["agregarPeriodos"])

    }
    actualizar(){
      setTimeout(location.reload.bind(location),100);
    }


}
