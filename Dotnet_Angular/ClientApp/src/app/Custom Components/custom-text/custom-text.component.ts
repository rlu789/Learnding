import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdManagerService } from '../../Injectables/id-manager.service'
@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css']
})
export class CustomTextComponent implements OnInit {
  @Input('type') type: string;
  @Input('prefix') prefix: string;
  @Input('suffix') suffix: string;
  @Input('placeholder') placeholder: string;
  @Input('hint') hint: string;
  @Input('formGroup') formGroup: FormGroup;
  componentId: string;
  errorMessage: string;

  constructor(private idManagerService: IdManagerService) { }

  ngOnInit() {
    if (!this.formGroup){
      this.formGroup = new FormGroup({
        'validator': new FormControl('', [ ]),
      });
    }
    this.componentId = this.idManagerService.generateId('text');
    // YIKES
    this.formGroup.addControl('componentId', new FormControl(this.componentId, [ ]));
  }

  checkErrors() {
    var self = this;
    // console.log(this.formGroup.get('validator').errors);
    if (this.formGroup.get('validator').errors){
      Object.keys(this.formGroup.get('validator').errors).forEach(function(key) {
          // console.log(self.formGroup.get('validator').errors[key]);
          switch (key) {
            case 'required':
              self.errorMessage = 'This field is required';
              return;
            case 'minlength':
              self.errorMessage = 'Input has to be of length ' + self.formGroup.get('validator').errors[key].requiredLength;
              return;
            default:
              break;
          }
          self.errorMessage = self.formGroup.get('validator').errors[key];
      });
    }
    else { this.errorMessage = undefined; }
  }

  get validate() { return this.formGroup.get('validator'); }

}
