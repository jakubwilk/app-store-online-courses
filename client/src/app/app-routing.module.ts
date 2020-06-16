import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './otherComponents/login/login.component';
import { RegisterComponent } from './otherComponents/register/register.component';
import { DashboardComponent } from './otherComponents/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { DashboardCoursesComponent } from './otherComponents/dashboard/dashboard-courses/dashboard-courses.component';
import { DashboardCategoriesComponent } from './otherComponents/dashboard/dashboard-categories/dashboard-categories.component';
import { DashboardUsersComponent } from './otherComponents/dashboard/dashboard-users/dashboard-users.component';
import { DashboardIndexComponent } from './otherComponents/dashboard/dashboard-index/dashboard-index.component';



const routes: Routes = [
  {
    path: 'home',
    component: FrontPageComponent,

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
    children: [
      {
        path: '', redirectTo: 'menu', pathMatch: 'full'
      },
      {
        path: 'menu',
        component: DashboardIndexComponent
      },
      {
        path: 'courses',
        component: DashboardCoursesComponent
      },
      {
        path: 'categories',
        component: DashboardCategoriesComponent
      },
      {
        path: 'users',
        component: DashboardUsersComponent
      }
    ],
    canActivate: [RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
