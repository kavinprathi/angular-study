import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
//import { ServiceService } from 'src/app/crud/service.service';
import { NestedserviceService } from '../nestedservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  id;
  form_id;

  nestedarray;
  // firstname
  constructor(public serviceservices: NestedserviceService,
    private router: Router,
    private routeparams: ActivatedRoute) {
    // console.log(this.id);
    this.id = this.routeparams.snapshot.params['path'];
    console.log(this.id);
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
    console.log(this.form.getRawValue())
    // if (typeof this.id == 'undefined') {
    //   this.serviceservices.create(this.form.value).subscribe(res => {
    //     console.log('array');
    //     this.router.navigateByUrl('/crud/list');
    //   })

    // } else {
    //   this.serviceservices.edit(this.id, this.form.value).subscribe(res => {
    //     this.router.navigateByUrl('/crud/list');
    //   })
    // }
  }
  form_int() {
    this.form = new FormGroup({
      Reg_No: new FormControl('', [Validators.required]),
      verified: new FormControl(false),
      student: new FormArray([
        new FormGroup({
          FirstName: new FormControl('', Validators.required),
          LastName: new FormControl('', Validators.required),
          DOB: new FormControl('', Validators.required),
          address: new FormGroup({
            addressline1: new FormControl('', Validators.required),
            addressline2: new FormControl('', Validators.required),
            City: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required),
            Pincode: new FormControl('', Validators.required),
          })
        })
      ]),
      college: new FormGroup({
        department: new FormControl('', Validators.required),

        name: new FormControl('', Validators.required)
      })
    })
    console.log(this.form)
  }
  get stud(): FormArray {
    return <FormArray>this.form.get('student')
  }

  load_data() {
    this.serviceservices.view(this.id).subscribe((dat) => {
      if (dat['code'] == 200) {
        this.nestedarray = dat['data']
        this.getvalue();
      }

      console.log('form id', this.nestedarray)
    })

  }
  getvalue() {
    this.form.patchValue(this.nestedarray)
  }
  appendstudentdetail() {
    this.stud.controls.push(new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      DOB: new FormControl('', Validators.required),
      address: new FormGroup({
        addressline1: new FormControl('', Validators.required),
        addressline2: new FormControl('', Validators.required),
        City: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        Pincode: new FormControl('', Validators.required),
      })
    }))
  }
  deletestudentdetail(index){
    this.stud.controls.splice(index,1)
  }
}
