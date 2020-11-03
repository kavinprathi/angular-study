import { Component, OnInit } from '@angular/core';
import { NestedserviceService } from '../nestedservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  array: any = [];
  nestedserviceservices: any;
  constructor(public service: NestedserviceService) { }

  ngOnInit(): void {
    this.initiate();
  }
 
  delete(id) {
    this.service.delete(id).subscribe((res) => {
      if (res['code'] == 200) {
       this.initiate();
      }
    })
  }
  initiate() {

    this.service.get().subscribe((response) => {
      if(response['code']==200){
      this.array = response['data'];
      console.table(response['data'])
      console.log("Data=>", this.array);
    }
    })
  }

}
