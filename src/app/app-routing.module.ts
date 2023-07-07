import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './Components/persona/persona.component';
import { InstitucionComponent } from './Components/institucion/institucion.component';
import { TipoPersonaComponent } from './Components/tipo-persona/tipo-persona.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FullLayoutComponent } from './Layout/full-layout/full-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch:'full' },
  { path: '', component: FullLayoutComponent,
    children:[
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Institucion', component: InstitucionComponent },
      { path: 'TipoPersona', component: TipoPersonaComponent },
      { path: 'Persona', component: PersonaComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
