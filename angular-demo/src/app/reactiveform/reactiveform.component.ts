import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  title = 'Angular 7 Project!';
  todaydate;
  componentproperty;
  emailid;
  formdata;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
      
      ])),
      passwd: new FormControl("")
    })
    console.log(this.formdata)
  }
  onClickSubmit(data) { this.emailid = data.emailid; }
}
