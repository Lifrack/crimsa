import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyProductosComponent } from './componentes/body/body-productos/body-productos.component';
import { CertificacionesComponent } from './paginas/certificaciones/certificaciones.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { IndexComponent } from './paginas/index/index.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { CFEV800052Component } from './paginas/productos/cfev800052/cfev800052.component';
import { FRAFSI114Component } from './paginas/productos/frafsi114/frafsi114.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { V800006Component } from './paginas/productos/v800006/v800006.component';
import { V800053Component } from './paginas/productos/v800053/v800053.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent,
  children: [
    { path: 'V800053', component: V800053Component },
    { path: 'V800006', component: V800006Component },
    { path: 'FRAFSI114', component: FRAFSI114Component },
    { path: 'CFEV8000-52', component: CFEV800052Component },
    { path: '', component: BodyProductosComponent },
  ],
},
  { path: 'certificados', component: CertificacionesComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
