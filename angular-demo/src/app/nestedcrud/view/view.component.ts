import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NestedserviceService } from '../nestedservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  array: any;

  constructor(
    public service: NestedserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['kavin'];
    console.log(this.id);
    this.service.view(this.id).subscribe((data) => { 
      this.array = data['data']; 
      console.table(data['data'])
    })
  }

}
