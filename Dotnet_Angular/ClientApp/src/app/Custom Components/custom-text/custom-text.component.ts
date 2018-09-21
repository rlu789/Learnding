import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css']
})
export class CustomTextComponent implements OnInit {
  @Input('prefix') prefix: string;
  @Input('suffix') suffix: string;
  @Input('placeholder') placeholder: string;
  @Input('hint') hint: string;

  constructor() { }

  ngOnInit() {
  }

}
