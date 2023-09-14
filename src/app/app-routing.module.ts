import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilosofiaComponent } from './pages/filosofia/filosofia.component';
import { purchasesComponent } from './pages/purchase/purchases.component';
import { ContactComponent } from './pages/contact/contact.component';
import { landingPageComponent } from './pages/landingPage/landingPage.component';

const routes: Routes = [
 { path: 'home', component: landingPageComponent},
 { path: 'pages/filosofia', component: FilosofiaComponent},
 { path: 'pages/compras', component: purchasesComponent},
 { path: 'pages/contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
