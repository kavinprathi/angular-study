import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreatComponent } from './creat/creat.component';
// import { ReactiveformModule } from '../reactiveform/reactiveform.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route : Routes =[
  {path:'', redirectTo:'list', pathMatch:'full'},
  {path:'list' , component:ListComponent},
  {path:'view/:bala', component:ViewComponent},
  {path:'creat' ,component:CreatComponent},
  {path:'edit/:path',component:CreatComponent}
  
]


@NgModule({
  declarations: [ListComponent, ViewComponent, CreatComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ]
})
export class CrudModule { }
