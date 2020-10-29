import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {
  form: FormGroup;
  constructor(public serviceservices: ServiceService,
    private router: Routes) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    })
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.serviceservices.create(this.form.value).subscribe(res => {
      console.log('array');
      this.router.navigateByUrl('crud/list');
    })
  }
}
