import { AgregarUsuariosComponent } from './private/usuarios/agregarUsuarios/agregar-usuarios/agregar-usuarios.component';
import { TablaReporteTareasComponent } from './public/login-formulario/reportes/reporte_tareas/tablaReporteTareas/tabla-reporte-tareas/tabla-reporte-tareas.component';

import { TablaUsuariosComponent } from './private/usuarios/tablaUsuarios/tabla-usuarios/tabla-usuarios.component';
import { AgregarMateriaAlumnoComponent } from './private/materia_alumno/agregarMateriaAlumno/agregar-materia-alumno/agregar-materia-alumno.component';
import { TablaMateriaAlumnoComponent } from './private/materia_alumno/tablaMateriaAlumno/tabla-materia-alumno/tabla-materia-alumno.component';
import { AgregarEntregaTareasComponent } from './public/entrega_tareas/agregarEntregaTareas/agregar-entrega-tareas/agregar-entrega-tareas.component';
import { TablaEntregaTareasComponent } from './public/entrega_tareas/tablaEntregaTareas/tabla-entrega-tareas/tabla-entrega-tareas.component';
import { AgregarMateriaDocenteComponent } from './private/materia_docente/agregarMateriaDocente/agregar-materia-docente/agregar-materia-docente.component';
import { TablaMateriaDocenteComponent } from './private/materia_docente/tablaMateriaDocente/tabla-materia-docente/tabla-materia-docente.component';
import { AlumnosComponent } from './private/alumnos/alumnos.component';
import { LisalumnoComponent } from './private/alumnos/lisalumno/lisalumno.component';
import { AgregarPeriodosComponent } from './private/periodos/agregarPeriodos/agregar-periodos/agregar-periodos.component';
import { TablaPeriodosComponent } from './private/periodos/tablaPeriodos/tabla-periodos/tabla-periodos.component';
import { AgregarMateriasComponent } from './private/materias/agregarMaterias/agregar-materias/agregar-materias.component';
import { TablaMateriasComponent } from './private/materias/tablaMaterias/tabla-materias/tabla-materias.component';
import { AgregarDocentesComponent } from './private/docentes/agregarDocentes/agregar-docentes/agregar-docentes.component';
import { TablaDocentesComponent } from './private/docentes/tablaDocentes/tabla-docentes/tabla-docentes.component';

import { AuthGuard } from './auth.guard';
import { LoginFormularioComponent } from './public/login-formulario/login-formulario.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaTareasComponent } from './public/tareas/tabalaTareas/tabla-tareas/tabla-tareas.component';
import { AgregarTareasComponent } from './public/tareas/agregarTareas/agregar-tareas/agregar-tareas.component';



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

  //tareas
  {path:'mostrarTareas', component:TablaTareasComponent},
  {path:'agregarTareas', component:AgregarTareasComponent},
  {path:'modificarTareas/:id', component:AgregarTareasComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
