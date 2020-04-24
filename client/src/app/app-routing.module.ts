import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './otherComponents/login/login.component';


const routes: Routes = [
  {
    path: 'Home',
    component: FrontPageComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
