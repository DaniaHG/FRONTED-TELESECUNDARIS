import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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

  cicloElegido!: string;

  constructor(private periodosService:PeriodosService, private router:Router, private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      ciclo: ['', Validators.required]
    })

   }


  collection = [{ 'ciclo': this.getCollection }];
  form: FormGroup;



  ngOnInit(): void {
    this.listarPeriodos();
    this.getCollection();
  }

  getCollection() {
    this.http
      .get<any>('http://localhost:3000/periodos').subscribe((res: any) => {
        this.collection = res;
      }, error => {
        console.log({ error });
      })
  }

  grabar_localstorage() {
    console.log(this.form.value.ciclo)
    let ciclo =  this.form.value.ciclo
    this.cicloElegido = ciclo

    localStorage.setItem("ciclo", ciclo);
    this.listarPeriodos();

    //this.router.navigate(["/mostrarPeriodos"]);
  }


  listarPeriodos(){

    this.periodosService.getCicloPeriodos(this.cicloElegido).subscribe(
      res=>{
        console.log(res)
        this.ListarPeriodos=<any>res;
      },
      err=> console.log(err)

    );

  }

  cicloCambio(ciclo:string){
    this.cicloElegido = ciclo

    this.listarPeriodos();
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
