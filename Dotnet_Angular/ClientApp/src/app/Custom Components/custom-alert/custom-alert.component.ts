import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent implements OnInit {
  @Input('title') title: string;
  @Input('content') content: string;
  @Input('type') type: string;
  class = 'icon ';

  constructor() {
  }

  ngOnInit() {
    switch (this.type) {
      case 'i':
        this.class += 'fas fa-info-circle fa-2x';
        break;
    
      default:
        break;
    }
  }

}
