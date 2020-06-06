import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './otherComponents/login/login.component';
import { RegisterComponent } from './otherComponents/register/register.component';
import { DashboardComponent } from './otherComponents/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
  {
    path: 'home',
    component: FrontPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
