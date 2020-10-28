import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnydeskComponent } from './anydesk.component';
import { WebpackComponent } from './webpack/webpack.component';
import { WebworkerComponent } from './webworker/webworker.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
  
  {
    path:'',
    redirectTo:'webworker',
    pathMatch:'full'
  },
  {
    path:'webworker',
    component:WebworkerComponent
  },
  
  {
    path:'webpack',
    component:WebpackComponent
  }
]}]

@NgModule({
  declarations: [AnydeskComponent, WebpackComponent, WebworkerComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class AnydeskModule { }
