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
  @Input('isVisible') isVisible: boolean;
  @Input('dismissible') dismissible: boolean;
  typeClass: string;
  iconClass = 'icon ';

  constructor() {
  }

  ngOnInit() {
    this.isVisible = this.isVisible !== undefined ? this.isVisible: true;
    switch (this.type) {
      case 'i':
        this.typeClass = 'info';
        this.iconClass += 'fas fa-info-circle fa-2x';
        break;
      case 'w':
        this.typeClass = 'warning';
        this.iconClass += 'fas fa-exclamation-circle fa-2x';
        break;
      case 's':
        this.typeClass = 'success';
        this.iconClass += 'fas fa-check-circle fa-2x';
      default:
        break;
    }
  }

  dismiss(){
      this.typeClass += ' dismissed';
  }
}
