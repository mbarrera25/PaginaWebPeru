import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './main/navigation/navigation.component';
import { FilosofiaComponent } from './pages/filosofia/filosofia.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
 { path: 'home', component: HomeComponent},
 { path: 'pages/filosofia', component: FilosofiaComponent},
 { path: 'pages/compras', component: ComprasComponent},
 { path: 'pages/contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
