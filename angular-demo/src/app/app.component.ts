import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ParentserviceService } from './parentservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Tour of Heroes';
  todaydate;
  constructor(private myservice:ParentserviceService ){}
  ngOnInit()
{
  this.todaydate=this.myservice.showtodaydate();
}}
