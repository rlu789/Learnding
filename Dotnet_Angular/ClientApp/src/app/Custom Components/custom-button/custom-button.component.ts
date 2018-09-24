import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  loading = false;
  @Input('text') text: string;
  @Output('clickFunc') clickFunc = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click(){
    console.log("BUTTON CLICKED");
    var self = this;
    this.loading = true;
    var observer = {
      complete: () => { self.loading = false; }
    };
    var observable = new Observable();
    observable.subscribe(observer);

    this.clickFunc.emit(observer); // send the event back up to parent so that parent func can call $event.complete()
  }
}
