import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLogoComponent } from './header-section/card-logo/card-logo.component';
import { CardNavComponent } from './header-section/card-nav/card-nav.component';
import { HeaderComponent } from './header-section/header/header.component';
import { MainComponent } from './main-section/main/main.component';
import { CardCategoriesComponent } from './main-section/card-categories/card-categories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardCoursesComponent } from './main-section/card-courses/card-courses.component';
import { CardOpinionsComponent } from './main-section/card-opinions/card-opinions.component';
import { CardInvitationComponent } from './main-section/card-invitation/card-invitation.component';
import { FooterComponent } from './footer-section/footer/footer.component';
import { LoginComponent } from './otherComponents/login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegisterComponent } from './otherComponents/register/register.component';
import { CardRightComponent } from './otherComponents/card-right/card-right.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './otherComponents/dashboard/dashboard.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DashboardIndexComponent } from './otherComponents/dashboard/dashboard-index/dashboard-index.component';
import { DashboardNavigationComponent } from './otherComponents/dashboard/dashboard-navigation/dashboard-navigation.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { DashboardCategoriesComponent } from './otherComponents/dashboard/dashboard-categories/dashboard-categories.component';
import { DashboardUsersComponent } from './otherComponents/dashboard/dashboard-users/dashboard-users.component';
import { DashboardCoursesComponent } from './otherComponents/dashboard/dashboard-courses/dashboard-courses.component';
import { CategoriesFormComponent } from './otherComponents/dashboard/dashboard-categories/categories-form/categories-form.component';
import { CategoriesUpdateComponent } from './otherComponents/dashboard/dashboard-categories/categories-update/categories-update.component';




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
    DashboardIndexComponent,
    DashboardNavigationComponent,
    DashboardCategoriesComponent,
    DashboardUsersComponent,
    DashboardCoursesComponent,
    CategoriesFormComponent,
    CategoriesUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
