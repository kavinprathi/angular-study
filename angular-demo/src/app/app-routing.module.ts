import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import{ReactiveformComponent}from'./reactiveform/reactiveform.component'
import { SinglepageComponent } from './singlepage/singlepage.component';
const routes: Routes = [
  {

    path: 'hero',
    loadChildren: () => import('./reactiveform/reactiveform.module').then(m => m.ReactiveformModule)

  },
  {
    path: '',
    redirectTo: 'compcomponent',
    pathMatch:'full'
  },
  {
    path: 'compcomponent',
    component: CompComponent
  },
  {
    path: 'singlepage',
    component: SinglepageComponent
  },
  {
    path:'aa',
    loadChildren:() =>import('./anydesk/anydesk.module').then(n =>n.AnydeskModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
