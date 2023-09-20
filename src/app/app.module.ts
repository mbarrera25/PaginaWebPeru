import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { FooterComponent } from './main/footer/footer.component';
import { purchasesComponent } from './pages/purchase/purchases.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FilosofiaComponent } from './pages/filosofia/filosofia.component';
import { landingPageComponent } from './pages/landingPage/landingPage.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './pages/landingPage/carousel/carousel.component';
import { ImagesInstagramComponent } from './pages/landingPage/images-instagram/images-instagram.component';
import { ButtonWhatsappComponent } from './main/navigation/button-whatsapp/button-whatsapp.component';
import { ProductCategoryComponent } from './pages/purchase/product-category/product-category.component';
import { ProductDetailsComponent } from './pages/purchase/product-details/product-details.component';
import { ProductListComponent } from './pages/purchase/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    FilosofiaComponent,
    purchasesComponent,
    ContactComponent,
    landingPageComponent,
    CarouselComponent,
    ImagesInstagramComponent,
    ButtonWhatsappComponent,
    ProductCategoryComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
