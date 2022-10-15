import { UsuariosService } from './../../../services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Usuarios } from './../../../interfaces/usuarios';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {


  usuarios: Usuarios= {
    id: '',
    userName: '',
    pass: '',
    roleId: ''

    }

    roleId: any[] = [
      'admin', 'user'
    ];

    addressForm = this.fb.group({
      id: [''],
      userName: ['', Validators.required],
      pass: ['', Validators.required],
      roleId: ['', Validators.required],
    });
    editing: boolean = false;

  constructor(private usuariosService:UsuariosService,
              private router:Router,
              private fb: FormBuilder,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    }

    cargarUsuarios() {
      const id = this._activatedRoute.snapshot.params.id;

      if (id) {
        this.editing = true;
        this.usuariosService.getIdUsuarios(id).subscribe(
          res => {
            this.usuarios = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarUsuarios(){
      if(this.editing){
        this.usuariosService.putUsuarios(this.usuarios.id, this.usuarios);
        this.router.navigate(['/mostrarUsuarios']);

      }else{
        const usuario: Usuarios = {
          id: this.addressForm.value.id,
          userName: this.addressForm.value.userName,
          pass: this.addressForm.value.pass,
          roleId: this.addressForm.value.roleId
        }
        this.usuariosService.postUsuarios(usuario);
        this.router.navigate(['/mostrarUsuarios']);
     }
    }

}
