import { Component, OnInit, Input, TemplateRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.css']
})
export class CustomAccordionComponent implements OnInit {
  @Input('title') title: string;
  @Input('contentView') contentView: TemplateRef<any>;
  @Input('dataSet') dataSet: {}[];
  @Input('multipleOpenable') multipleOpenable: boolean;
  recordsOpened = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    while (this.dataSet.length > this.recordsOpened.length) {
      this.recordsOpened.push(true);
    }
  }

  openRecordEvent(index){
    for (var i = 0; i < this.recordsOpened.length; i++){
      if (i == index) {
        continue;
      }
      this.recordsOpened[i] = true;
    }
  }
}
