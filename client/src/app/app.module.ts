import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLogoComponent } from './header-section/card-logo/card-logo.component';
import { CardNavComponent } from './header-section/card-nav/card-nav.component';
import { HeaderComponent } from './header-section/header/header.component';
import { MainComponent } from './main-section/main/main.component';
import { CardCategoriesComponent } from './main-section/card-categories/card-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { CardCoursesComponent } from './main-section/card-courses/card-courses.component';



@NgModule({
  declarations: [
    AppComponent,
    CardLogoComponent,
    CardNavComponent,
    HeaderComponent,
    MainComponent,
    CardCategoriesComponent,
    CardCoursesComponent,
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
