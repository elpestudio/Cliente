import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleCursoComponent } from './Components/detalle-curso/detalle-curso.component';
import { CronogramaCursoComponent } from './Components/cronograma-curso/cronograma-curso.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InstitucionComponent } from './Components/institucion/institucion.component';
import { TipoPersonaComponent } from './Components/tipo-persona/tipo-persona.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { FullLayoutComponent } from './Layout/full-layout/full-layout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleCursoComponent,
    CronogramaCursoComponent,
    NavbarComponent,
    InstitucionComponent,
    TipoPersonaComponent,
    PersonaComponent,
    FullLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
