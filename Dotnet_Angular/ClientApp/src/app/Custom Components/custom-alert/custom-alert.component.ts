import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent implements OnInit {
  @Input('title') title: string;
  //@Input('content') content: string; // this should now be handled by ng-content
  @Input('type') type: string;
  @Input('isVisible') isVisible: boolean;
  @Input('dismissible') dismissible: boolean;
  typeClass: string;
  iconClass: string;

  constructor() {
  }

  ngOnInit() {
    this.isVisible = this.isVisible !== undefined ? this.isVisible: true;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setClasses();
  }

  setClasses(){
    switch (this.type) {
      case 'i':
        this.typeClass = 'info';
        this.iconClass = 'icon fas fa-info-circle fa-2x';
        break;
      case 'w':
        this.typeClass = 'warning';
        this.iconClass = 'icon fas fa-exclamation-circle fa-2x';
        break;
      case 's':
        this.typeClass = 'success';
        this.iconClass = 'icon fas fa-check-circle fa-2x';
      default:
        break;
    }
  }

  dismiss(){
      this.isVisible = false;
  }
}
