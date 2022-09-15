import { DocentesService } from './../../../services/docentes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Docentes } from './../../../interfaces/docentes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-docentes',
  templateUrl: './agregar-docentes.component.html',
  styleUrls: ['./agregar-docentes.component.css']
})
export class AgregarDocentesComponent implements OnInit {

  docentes: Docentes= {
    id: '',
    dpi: '',
    nombre: '',
    fecha_nacimiento: '',
    fecha_ingreso: '',
    direccion: '',
    telefono: '',
    correo: ''
    }
    addressForm = this.fb.group({
      id: [''],
      dpi: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required]
    });
    editing: boolean = false;

  constructor(private docentesService:DocentesService,
              private router:Router,
              private fb: FormBuilder,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDocentes();
    }

    cargarDocentes() {
      const id = this._activatedRoute.snapshot.params.id;

      if (id) {
        this.editing = true;
        this.docentesService.getIdDocentes(id).subscribe(
          res => {
            this.docentes = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarDocentes(){
      if(this.editing){
        this.docentesService.putDocentes(this.docentes.id, this.docentes);
        this.router.navigate(['/mostrarDocentes']);

      }else{
        const docente: Docentes = {
          id: this.addressForm.value.id,
          dpi: this.addressForm.value.dpi,
          nombre: this.addressForm.value.nombre,
          fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
          fecha_ingreso: this.addressForm.value.fecha_ingreso,
          direccion: this.addressForm.value.direccion,
          telefono: this.addressForm.value.telefono,
          correo: this.addressForm.value.correo
        }
        this.docentesService.postDocentes(docente);
        this.router.navigate(['/mostrarDocentes']);
     }
    }
}
