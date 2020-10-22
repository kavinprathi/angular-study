import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  

  data=[] 
    name=''
    id=''
    dob=''
    address=''
    city=''

  
  constructor() { }

  ngOnInit() {}
    add()
    {
      this.data.push({
        name:this.name,
        id:this.id,
        dob:this.dob,
        address:this.address,
        city:this.city
      })
    }
  

}
