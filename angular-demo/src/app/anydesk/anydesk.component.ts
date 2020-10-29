import { Component, OnInit } from '@angular/core';
import { ParentserviceService } from '../parentservice.service';

@Component({
  selector: 'app-anydesk',
  templateUrl: './anydesk.component.html',
  styleUrls: ['./anydesk.component.css']
})
export class AnydeskComponent implements OnInit {

  constructor(private myservices:ParentserviceService) { }

  ngOnInit(){
  }

}
