import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentserviceService {

  constructor() { }
  showtodaydate()
  {
    let ndate=new Date();
    return ndate;
  }
}
