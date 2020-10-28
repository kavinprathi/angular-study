import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
 
const routes: Routes=[
  {
    path: '',
    component: ReactiveformComponent
  }
]


@NgModule({
  declarations: [ReactiveformComponent, DemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
  
})
export class ReactiveformModule { }
