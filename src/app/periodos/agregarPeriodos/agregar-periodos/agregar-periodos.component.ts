import { PeriodosService } from 'src/app/services/periodos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Periodos } from 'src/app/interfaces/periodos';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-periodos',
  templateUrl: './agregar-periodos.component.html',
  styleUrls: ['./agregar-periodos.component.css']
})
export class AgregarPeriodosComponent implements OnInit {

  periodos: Periodos= {
    id: '',
    descripcion: ''
    }
    addressForm = this.fb.group({
      id: [''],
      descripcion: ['', Validators.required]
    });
    editing: boolean = false;

  constructor(private periodosService:PeriodosService,
              private router:Router,
              private fb: FormBuilder,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPeriodos();
    }

    cargarPeriodos() {
      const id = this._activatedRoute.snapshot.params.id;

      if (id) {
        this.editing = true;
        this.periodosService.getIdPeriodos(id).subscribe(
          res => {
            this.periodos = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarPeriodos(){
      if(this.editing){
        this.periodosService.putPeriodos(this.periodos.id, this.periodos);
        this.router.navigate(['/mostrarPeriodos']);

      }else{
        const periodos: Periodos = {
          id: this.addressForm.value.id,
          descripcion: this.addressForm.value.descripcion
        }
        this.periodosService.postPeriodos(periodos);
        this.router.navigate(['/mostrarPeriodos']);
     }
    }
}
