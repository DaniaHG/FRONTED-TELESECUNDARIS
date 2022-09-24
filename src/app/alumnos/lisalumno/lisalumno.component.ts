import { Router, ActivatedRoute } from '@angular/router';
import { AluService } from 'src/app/services/alu.service';
import {Alumnos } from '../../interfaces/alumnos';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-lisalumno',
  templateUrl: './lisalumno.component.html',
  styleUrls: ['./lisalumno.component.css']
})
export class LisalumnoComponent implements OnInit {
  alumnos: Alumnos= {
    id: '',
    nombre: '',
    fecha_nacimiento: '',
    fecha_ingreso: '',
    direccion: '',
    telefono: '',
    
    }
    addressForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
 
    });
    editing: boolean = false;
  

    constructor(private aluservice:AluService ,
                private router:Router,
                private fb: FormBuilder,
                private _activatedRoute: ActivatedRoute) { }
 
                 ngOnInit(): void {
    this.cargarAlumnos();
    }

    cargarAlumnos() {
      const id = this._activatedRoute.snapshot.params.id;

      if (id) {
        this.editing = true;
        this.aluservice.getIdAlumnos(id).subscribe(
          res => {
            this.alumnos = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarAlumnos(){
      if(this.editing){
        this.aluservice.putAlumnos(this.alumnos.id, this.alumnos);
        this.router.navigate(['/mostrarAlumnos']);

      }else{
        const alumno: Alumnos = {
          id: this.addressForm.value.id,
          nombre: this.addressForm.value.nombre,
          fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
          fecha_ingreso: this.addressForm.value.fecha_ingreso,
          direccion: this.addressForm.value.direccion,
          telefono: this.addressForm.value.telefono,
       
        }
        this.aluservice.postAlumnos(alumno);
        this.router.navigate(['/mostrarAlumnos']);
     }
    }
}