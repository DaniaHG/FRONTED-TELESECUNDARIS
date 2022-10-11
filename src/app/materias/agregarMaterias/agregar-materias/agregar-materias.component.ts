import { Router, ActivatedRoute } from '@angular/router';
import { MateriasService } from './../../../services/materias.service';
import { Materias } from './../../../interfaces/materias';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-materias',
  templateUrl: './agregar-materias.component.html',
  styleUrls: ['./agregar-materias.component.css']
})
export class AgregarMateriasComponent implements OnInit {

  materias: Materias= {
    id: '',
    nombre: ''

    }
    addressForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required]
    });
    editing: boolean = false;

  constructor(private materiasService:MateriasService,
              private router:Router,
              private fb: FormBuilder,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarMaterias();
    }

    cargarMaterias() {
      const id = this._activatedRoute.snapshot.params.id;

      if (id) {
        this.editing = true;
        this.materiasService.getIdMaterias(id).subscribe(
          res => {
            this.materias = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarMaterias(){
      if(this.editing){
        this.materiasService.putMaterias(this.materias.id, this.materias);
        this.router.navigate(['/mostrarMaterias']);

      }else{
        const materia: Materias = {
          id: this.addressForm.value.id,
          nombre: this.addressForm.value.nombre
        }
        this.materiasService.postMaterias(materia);
        this.router.navigate(['/mostrarMaterias']);
     }
    }

}
