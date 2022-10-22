import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { TareasService } from '../../../../services/tareas.service';
import { Tareas } from '../../../../interfaces/tareas';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.component.html',
  styleUrls: ['./agregar-tareas.component.css']
})
export class AgregarTareasComponent implements OnInit {

  tareas: Tareas= {
    id: '',
    fecha: '',
    nombre: '',
    descripcion: '',
    materias_id: '',
    materia: '',
    grado: '',
    seccion: '',
    periodos_id: '',
    periodo: ''

    }
    addressForm = this.fb.group({
      id: [''],
      fecha:[''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      materias_id: ['', Validators.required],
      materia: [''],
      grado: [''],
      seccion: [''],
      periodos_id: ['', Validators.required],
      periodo: ['']
    });
    editing: boolean = false;

  constructor(private tareasService:TareasService,
              private router:Router,
              private fb: FormBuilder,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarTareas();
    }

    cargarTareas() {
      const id = this._activatedRoute.snapshot.params.id;

      if (id) {
        this.editing = true;
        this.tareasService.getIdTareas(id).subscribe(
          res => {
            this.tareas = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarTareas(){
      if(this.editing){
        this.tareasService.putTareas(this.tareas.id, this.tareas);
        this.router.navigate(['/mostrarTareas']);

      }else{
        const tareas: Tareas = {
          id: this.addressForm.value.id,
          fecha: this.addressForm.value.fecha,
          nombre: this.addressForm.value.nombre,
          descripcion: this.addressForm.value.descripcion,
          materias_id: this.addressForm.value.materias_id,
          materia: this.addressForm.value.materia,
          grado: this.addressForm.value.grado,
          seccion: this.addressForm.value.seccion,
          periodos_id: this.addressForm.value.periodos_id,
          periodo: this.addressForm.value.periodo


        }
        this.tareasService.postTareas(tareas);
        this.router.navigate(['/mostrarTareas']);
     }
    }

}