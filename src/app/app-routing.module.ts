import { TablaReporteTareasComponent } from './reportes/reporte_tareas/tablaReporteTareas/tabla-reporte-tareas/tabla-reporte-tareas.component';
import { AgregarUsuariosComponent } from './usuarios/agregarUsuarios/agregar-usuarios/agregar-usuarios.component';
import { TablaUsuariosComponent } from './usuarios/tablaUsuarios/tabla-usuarios/tabla-usuarios.component';
import { AgregarMateriaAlumnoComponent } from './materia_alumno/agregarMateriaAlumno/agregar-materia-alumno/agregar-materia-alumno.component';
import { TablaMateriaAlumnoComponent } from './materia_alumno/tablaMateriaAlumno/tabla-materia-alumno/tabla-materia-alumno.component';
import { AgregarMateriaDocenteComponent } from './materia_docente/agregarMateriaDocente/agregar-materia-docente/agregar-materia-docente.component';
import { TablaMateriaDocenteComponent } from './materia_docente/tablaMateriaDocente/tabla-materia-docente/tabla-materia-docente.component';
import { AgregarMateriasComponent } from './materias/agregarMaterias/agregar-materias/agregar-materias.component';
import { TablaMateriasComponent } from './materias/tablaMaterias/tabla-materias/tabla-materias.component';
import { AgregarDocentesComponent } from './docentes/agregarDocentes/agregar-docentes/agregar-docentes.component';
import { TablaDocentesComponent } from './docentes/tablaDocentes/tabla-docentes/tabla-docentes.component';
import { AuthGuard } from './auth.guard';
import { LoginFormularioComponent } from './public/login-formulario/login-formulario.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaPeriodosComponent } from './periodos/tablaPeriodos/tabla-periodos/tabla-periodos.component';
import { AgregarPeriodosComponent } from './periodos/agregarPeriodos/agregar-periodos/agregar-periodos.component';
import { LisalumnoComponent } from './alumnos/lisalumno/lisalumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { TablaEntregaTareasComponent } from './entrega_tareas/tablaEntregaTareas/tabla-entrega-tareas/tabla-entrega-tareas.component';
import { AgregarEntregaTareasComponent } from './entrega_tareas/agregarEntregaTareas/agregar-entrega-tareas/agregar-entrega-tareas.component';


const routes: Routes = [
  {path: '', component:  TablaDocentesComponent},
  //{path: 'login', component:  LoginFormularioComponent},//

   //docentes
  {path:'mostrarDocentes', component:TablaDocentesComponent},
  {path:'agregarDocentes', component:AgregarDocentesComponent},
  {path:'modificarDocentes/:id', component:AgregarDocentesComponent},

   //materias
  {path:'mostrarMaterias', component:TablaMateriasComponent},
  {path:'agregarMaterias', component:AgregarMateriasComponent},
  {path:'modificarMaterias/:id', component:AgregarMateriasComponent},

   //periodos
  {path:'mostrarPeriodos', component:TablaPeriodosComponent},
  {path:'agregarPeriodos', component:AgregarPeriodosComponent},
  {path:'modificarPeriodos/:id', component:AgregarPeriodosComponent},

  //alumnos
  {path:'AgregarAlumnos', component:LisalumnoComponent},
  {path:'mostrarAlumnos', component:AlumnosComponent},
  {path:'modificarAlumnos/:id', component:LisalumnoComponent},

   //materias docentes
  {path:'mostrarMateriasDocente', component:TablaMateriaDocenteComponent},
  {path:'agregarMateriasDocente', component:AgregarMateriaDocenteComponent},
  {path:'modificarMateriasDocente/:id', component:AgregarMateriaDocenteComponent},

  //EntregaTareas
  {path:'mostrarEntregaTareas', component:TablaEntregaTareasComponent},
  {path:'agregarEntregaTareas', component:AgregarEntregaTareasComponent},
  {path:'modificarEntregaTareas/:id', component:AgregarEntregaTareasComponent},

  //materias alumnos
  {path:'mostrarMateriasAlumno', component:TablaMateriaAlumnoComponent},
  {path:'agregarMateriasAlumno', component:AgregarMateriaAlumnoComponent},
  {path:'modificarMateriasAlumno/:id', component:AgregarMateriaAlumnoComponent},

  //usuarios
  {path:'mostrarUsuarios', component:TablaUsuariosComponent},
  {path:'agregarUsuarios', component:AgregarUsuariosComponent},
  {path:'modificarUsuarios/:id', component:AgregarUsuariosComponent},

  //reporte tareas
  {path:'mostrarReporteTareas', component:TablaReporteTareasComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
