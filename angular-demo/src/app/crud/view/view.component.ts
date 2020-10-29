import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  array: any;

  constructor(
    public serviceservice: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['bala'];
    this.serviceservice.find(this.id).subscribe((data) => { 
      this.array = data['data']; 
      
    })
  }

}
