import { Router } from '@angular/router';
import { SecurityService } from './../../services/security.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/services/security.service';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.css']
})
export class LoginFormularioComponent {
  usuario: Usuario = {
     value:'',
    userName: '',
    pass: '',
    roleId:''
  
  
  };

  addressForm = this.fb.group({

    id: [""],
    userName: [null, Validators.required],
    pass: [null, Validators.required],

  });

  hasUnitNumber = false;
  formvalidate: any;

  constructor(private fb: FormBuilder, private securitySevice: SecurityService, private router: Router) {}

  onLogin() {
    this.securitySevice.login(this.usuario).subscribe(
      (res) =>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['/mostrarAlumnos']);
        this.addressForm.value.userName == "admin"? localStorage.setItem('userType','admin') : localStorage.setItem('userType', 'user')
       
      }
      
    )
    
  }
 
}
