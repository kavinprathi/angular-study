import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {
  form: FormGroup;
  id;
  form_id;
  
  c_array;
  // firstname
  constructor(public serviceservices: ServiceService,
    private router: Router,
    private routeparams: ActivatedRoute) {
    // console.log(this.id);
    this.id = this.routeparams.snapshot.params['path'];
console.log(this.id)
    if (typeof this.id != 'undefined') {

      this.load_data();

    }
  }



  ngOnInit(): void {
    this.form_int();
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    if(typeof this.id=='undefined'){
      this.serviceservices.create(this.form.value).subscribe(res => {
        console.log('array');
        this.router.navigateByUrl('/crud/list');
      })
  
    }else{
          this.serviceservices.update(this.id,this.form.value).subscribe(res =>{
            this.router.navigateByUrl('/crud/list');
          })
    }
      }
  form_int() {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    })

  }
  load_data() {
    this.serviceservices.find(this.id).subscribe((dat) => {
      if (dat['code'] == 200) {
        this.c_array = dat['data']
        this.getvalue();
      }

      console.log('form id', this.c_array)
    })

  }
  getvalue() {
    this.form.patchValue(this.c_array)
  }
}
