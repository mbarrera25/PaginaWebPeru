import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilosofiaComponent } from './pages/filosofia/filosofia.component';
import { purchasesComponent } from './pages/purchase/purchases.component';
import { ContactComponent } from './pages/contact/contact.component';
import { landingPageComponent } from './pages/landingPage/landingPage.component';
import { ProductCategoryComponent } from './pages/purchase/product-category/product-category.component';
import { ProductDetailsComponent } from './pages/purchase/product-details/product-details.component';
import { ProductListComponent } from './pages/purchase/product-list/product-list.component';

const routes: Routes = [
 { path: 'home', component: landingPageComponent},
 { path: 'pages/filosofia', component: FilosofiaComponent},
 { path: 'pages/compras', component: purchasesComponent},
 { path: 'pages/compras/category', component: ProductCategoryComponent},
 { path: 'pages/compras/:category', component: ProductListComponent},
 { path: 'pages/compras/productos/detalle/:id', component: ProductDetailsComponent},
 { path: 'pages/contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
