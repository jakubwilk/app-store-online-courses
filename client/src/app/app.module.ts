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
import { CardOpinionsComponent } from './main-section/card-opinions/card-opinions.component';
import { CardInvitationComponent } from './main-section/card-invitation/card-invitation.component';
import { FooterComponent } from './footer-section/footer/footer.component';
import { LoginComponent } from './otherComponents/login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegisterComponent } from './otherComponents/register/register.component';
import { CardRightComponent } from './otherComponents/card-right/card-right.component';
import { DashboardComponent } from './otherComponents/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    CardLogoComponent,
    CardNavComponent,
    HeaderComponent,
    MainComponent,
    CardCategoriesComponent,
    CardCoursesComponent,
    CardOpinionsComponent,
    CardInvitationComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FrontPageComponent,
    CardRightComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
