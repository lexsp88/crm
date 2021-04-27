import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'gasto', component: GastoComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'usuario', component: UsuarioComponent, children:[
        { path: 'proyectos', component: ProyectosComponent }
    ] },
    { path: '**', pathMatch: 'full', redirectTo:  'home'  }
    

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);