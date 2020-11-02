import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const route:Routes=[
  {path:'', redirectTo:'list',pathMatch:'full'},
  {path:'view/:kavin',component:ViewComponent},
  {path:'list',component:ListComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:path',component:CreateComponent},

]


@NgModule({
  declarations: [CreateComponent,
     ListComponent, 
     ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NestedcrudModule { }
