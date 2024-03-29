import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarPcComponent } from './componentes/navbar-pc/navbar-pc.component';
import { HeroIndexComponent } from './componentes/hero-index/hero-index.component';
import { IndexComponent } from './paginas/index/index.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CertificacionesComponent } from './paginas/certificaciones/certificaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './componentes/top-navbar/top-navbar.component';
import { BodyProductosComponent } from './componentes/body/body-productos/body-productos.component';
import { CFEV800052Component } from './paginas/productos/cfev800052/cfev800052.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina/piedepagina.component';
import { FRAFSI114Component } from './paginas/productos/frafsi114/frafsi114.component';
import { V800006Component } from './paginas/productos/v800006/v800006.component';
import { V800053Component } from './paginas/productos/v800053/v800053.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPcComponent,
    HeroIndexComponent,
    IndexComponent,
    ProductosComponent,
    NosotrosComponent,
    ContactoComponent,
    CertificacionesComponent,
    TopNavbarComponent,
    BodyProductosComponent,
    CFEV800052Component,
    PiedepaginaComponent,
    FRAFSI114Component,
    V800006Component,
    V800053Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
