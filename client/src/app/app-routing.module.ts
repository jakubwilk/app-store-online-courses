import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';


const routes: Routes = [
  {
    path: 'Home',
    component: FrontPageComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
