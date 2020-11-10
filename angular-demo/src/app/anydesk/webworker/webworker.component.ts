import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webworker',
  templateUrl: './webworker.component.html',
  styleUrls: ['./webworker.component.css']
})
export class WebworkerComponent implements OnInit {
  image;
  constructor() { }

  ngOnInit(): void {
  }
  changeListener($event): void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myreader: FileReader = new FileReader();
    myreader.onloadend = (e) => {
      this.image = myreader.result;
      console.log(myreader.result);
    }
    myreader.readAsDataURL(file);
  }
}
