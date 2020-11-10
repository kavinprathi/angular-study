import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import * as XLSX from 'xlsx';
import {ActivatedRoute,Router} from '@angular/router'
import {sheet} from '../../sheet'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
excel =new sheet().sheets;
  array:any = [];
  constructor(public serviceservice: ServiceService) { }

  ngOnInit(): void {
    // this.lsit();
    this.sheet();
console.log(this.excel);
  }
  deletearray(id) {
    this.serviceservice.delete(id).subscribe(res => {
      // this.array = res['data'];
      console.log('array was deleted');
    })
    this.lsit()
  }
lsit(){
  this.serviceservice.getAll().subscribe((response) => {
    this.array = response['data'];
    console.log("response => ",response)
    console.log("Data=>",this.array);
  })

}
sheet(){
  const fileName = 'returning customer.xlsx';
var width=[
  {wch:20}
]
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.excel);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  ws['!cols']=width;
  XLSX.utils.book_append_sheet(wb, ws, 'returning customer');

  XLSX.writeFile(wb, fileName);
}
}

