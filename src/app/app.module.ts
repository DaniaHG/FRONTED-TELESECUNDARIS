import { AgregarUsuariosComponent } from './private/usuarios/agregarUsuarios/agregar-usuarios/agregar-usuarios.component';

import { TablaReporteTareasComponent } from './public/login-formulario/reportes/reporte_tareas/tablaReporteTareas/tabla-reporte-tareas/tabla-reporte-tareas.component';
import { TablaUsuariosComponent } from './private/usuarios/tablaUsuarios/tabla-usuarios/tabla-usuarios.component';

import { TablaMateriaAlumnoComponent } from './private/materia_alumno/tablaMateriaAlumno/tabla-materia-alumno/tabla-materia-alumno.component';
import { AgregarMateriaAlumnoComponent } from './private/materia_alumno/agregarMateriaAlumno/agregar-materia-alumno/agregar-materia-alumno.component';
import { TablaEntregaTareasComponent } from './public/entrega_tareas/tablaEntregaTareas/tabla-entrega-tareas/tabla-entrega-tareas.component';
import { AgregarEntregaTareasComponent } from './public/entrega_tareas/agregarEntregaTareas/agregar-entrega-tareas/agregar-entrega-tareas.component';
import { TablaMateriaDocenteComponent } from './private/materia_docente/tablaMateriaDocente/tabla-materia-docente/tabla-materia-docente.component';
import { AgregarMateriaDocenteComponent } from './private/materia_docente/agregarMateriaDocente/agregar-materia-docente/agregar-materia-docente.component';
import { LisalumnoComponent } from './private/alumnos/lisalumno/lisalumno.component';
import { AlumnosComponent } from './private/alumnos/alumnos.component';
import { TablaPeriodosComponent } from './private/periodos/tablaPeriodos/tabla-periodos/tabla-periodos.component';
import { AgregarPeriodosComponent } from './private/periodos/agregarPeriodos/agregar-periodos/agregar-periodos.component';
import { TablaMateriasComponent } from './private/materias/tablaMaterias/tabla-materias/tabla-materias.component';
import { AgregarMateriasComponent } from './private/materias/agregarMaterias/agregar-materias/agregar-materias.component';
import { AgregarDocentesComponent } from './private/docentes/agregarDocentes/agregar-docentes/agregar-docentes.component';
import { TablaDocentesComponent } from './private/docentes/tablaDocentes/tabla-docentes/tabla-docentes.component';
import { InterceptorService } from './services/interceptor.service';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginFormularioComponent } from './public/login-formulario/login-formulario.component';

import { AgregarTareasComponent } from './public/tareas/agregarTareas/agregar-tareas/agregar-tareas.component';
import { TablaTareasComponent } from './public/tareas/tabalaTareas/tabla-tareas/tabla-tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginFormularioComponent,
    TablaDocentesComponent,
    AgregarDocentesComponent,
    AgregarMateriasComponent,
    TablaMateriasComponent,
    AgregarPeriodosComponent,
    TablaPeriodosComponent,
    AlumnosComponent,
    LisalumnoComponent,
    AgregarMateriaDocenteComponent,
    TablaMateriaDocenteComponent,
    AgregarEntregaTareasComponent,
    TablaEntregaTareasComponent,
    AgregarMateriaAlumnoComponent,
    TablaMateriaAlumnoComponent,
    AgregarUsuariosComponent,
    TablaUsuariosComponent,
    TablaReporteTareasComponent,
    AgregarTareasComponent,
    TablaTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
