import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent implements OnInit {
  @Input('title') title: string;
  //@Input('content') content: string; // this should now be handled by ng-content
  @Input('type') type: string;
  @Input('isVisible') isVisible: boolean | FormGroup;
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
      case 'e':
        this.typeClass = 'error';
        this.iconClass = 'icon fas fa-times-circle fa-2x';
        break;
      case 's':
        this.typeClass = 'success';
        this.iconClass = 'icon fas fa-check-circle fa-2x';
      default:
        break;
    }
  }

  dismiss(){
    if (typeof this.isVisible === 'boolean')
      this.isVisible = false;
    else{
      this.isVisible.get('validator').setValue(false);
    }
  }
}
