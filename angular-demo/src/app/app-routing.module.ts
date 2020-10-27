import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { HerosComponent } from './heros/heros.component';

const routes: Routes = [
  {

    path: 'hero',
    loadChildren: () => import('./reactiveform/reactiveform.module').then(m => m.ReactiveformModule)
  },
  {
    path: '',
    redirectTo:'hero',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
