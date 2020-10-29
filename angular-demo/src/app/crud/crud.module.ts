import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreatComponent } from './creat/creat.component';

const route : Routes =[
  {path:'', redirectTo:'list', pathMatch:'full'},
  {path:'list' , component:ListComponent},
  {path:'view/:bala', component:ViewComponent}
  
]


@NgModule({
  declarations: [ListComponent, ViewComponent, CreatComponent],
  imports: [
    CommonModule,
    
    RouterModule.forChild(route)
  ]
})
export class CrudModule { }
