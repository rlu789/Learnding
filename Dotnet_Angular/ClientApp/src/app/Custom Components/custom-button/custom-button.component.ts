import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  loading = false;
  @Input('clickFunc') clickFunc: Function;

  constructor() { }

  ngOnInit() {
  }

  click(){
    console.log("BUTTON CLICKED");
    var self = this;
    this.loading = true;
    new Promise(resolve => setTimeout(resolve, 2000)).then(function(){
      self.loading = false;
    });
  }
}
