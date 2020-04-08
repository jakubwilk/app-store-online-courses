import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLogoComponent } from './header-section/card-logo/card-logo.component';
import { CardNavComponent } from './header-section/card-nav/card-nav.component';
import { HeaderComponent } from './header-section/header/header.component';
import { MainComponent } from './main-section/main/main.component';
import { CardCategoriesComponent } from './main-section/card-categories/card-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    CardLogoComponent,
    CardNavComponent,
    HeaderComponent,
    MainComponent,
    CardCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
