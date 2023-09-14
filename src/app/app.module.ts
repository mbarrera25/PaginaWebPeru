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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    FilosofiaComponent,
    purchasesComponent,
    ContactComponent,
    landingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
