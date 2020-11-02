import { Component, OnInit } from '@angular/core';
import { NestedserviceService } from '../nestedservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  array:any = [];
  constructor(public service: NestedserviceService) { }

  ngOnInit(): void {
    this.service.get().subscribe((response) => {
      this.array = response['data'];
      console.table(response['data'])
      console.log("Data=>",this.array);
    })
  }
  deletearray(id) {
    this.service.delete(id).subscribe(res => {
      // this.array = res['data'];
      console.log('array was deleted');
    })
  }

}
