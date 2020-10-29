import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  array:any = [];
  constructor(public serviceservice: ServiceService) { }

  ngOnInit(): void {
    this.serviceservice.getAll().subscribe((response) => {
      this.array = response['data'];
      console.log("response => ",response)
      console.log("Data=>",this.array);
    })
  }
  deletearray(id) {
    this.serviceservice.delete(id).subscribe(res => {
      // this.array = res['data'];
      console.log('array was deleted');
    })
  }

}

