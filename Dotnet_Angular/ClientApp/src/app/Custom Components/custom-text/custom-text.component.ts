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
  @Input('errorMessage') errorMessage: string;
  @Input('formGroup') formGroup: FormGroup;
  componentId: string;

  constructor(private idManagerService: IdManagerService) { }

  ngOnInit() {
    if (!this.formGroup){
      this.formGroup = new FormGroup({
        'validator': new FormControl('', [ ]),
      });
    }
    this.componentId = this.idManagerService.generateId('text-');
    this.formGroup.addControl('componentId', new FormControl(this.componentId, [ ]))
  }

  get validate() { return this.formGroup.get('validator'); }

}
