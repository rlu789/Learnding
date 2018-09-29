import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  @Input('data') data: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.data);
  }
}
