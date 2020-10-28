import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CompComponent } from './comp/comp.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SinglepageComponent } from './singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CompComponent,
    
    SinglepageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
