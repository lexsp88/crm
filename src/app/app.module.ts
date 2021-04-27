import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpleadosComponent,
    ClientesComponent,
    ProveedoresComponent,
    GastoComponent,
    UsuarioComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
