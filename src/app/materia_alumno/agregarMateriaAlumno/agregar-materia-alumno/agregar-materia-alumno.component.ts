import { Router, ActivatedRoute } from '@angular/router';
import { MateriaAlumnoService } from './../../../services/materia-alumno.service';
import { Validators, FormBuilder } from '@angular/forms';
import { MateriaAlumno } from './../../../interfaces/materia-alumno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-materia-alumno',
  templateUrl: './agregar-materia-alumno.component.html',
  styleUrls: ['./agregar-materia-alumno.component.css']
})
export class AgregarMateriaAlumnoComponent implements OnInit {

  materiasAlumno: MateriaAlumno= {
    id: '',
    materias_id: '',
    materia: '',
    alumnos_id: '',
    alumno: ''

    }
    addressForm = this.fb.group({
      id: [''],
      materias_id: ['', Validators.required],
      materia: [''],
      alumnos_id: ['', Validators.required],
      alumno: [''],
    });
    editing: boolean = false;

  constructor(private materiasAlumnoService:MateriaAlumnoService,
              private router:Router,
              private fb: FormBuilder,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarMateriaAlumno();
    }

    cargarMateriaAlumno() {
      const id = this._activatedRoute.snapshot.params.id;

      if (id) {
        this.editing = true;
        this.materiasAlumnoService.getIdMateriaAlumno(id).subscribe(
          res => {
            this.materiasAlumno = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarMateriaAlumno(){
      if(this.editing){
        this.materiasAlumnoService.putMateriaAlumno(this.materiasAlumno.id, this.materiasAlumno);
        this.router.navigate(['/mostrarMateriasAlumno']);

      }else{
        const materiaAlumno: MateriaAlumno = {
          id: this.addressForm.value.id,
          materias_id: this.addressForm.value.materias_id,
          materia: this.addressForm.value.materia,
          alumnos_id: this.addressForm.value.alumnos_id,
          alumno: this.addressForm.value.alumno
        }
        this.materiasAlumnoService.postMateriaAlumno(materiaAlumno);
        this.router.navigate(['/mostrarMateriasAlumno']);
     }
    }

}


