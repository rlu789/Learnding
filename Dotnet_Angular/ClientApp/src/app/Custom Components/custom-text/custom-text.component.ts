import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css']
})
export class CustomTextComponent implements OnInit {
  @Input('prefix') prefix: string;
  @Input('suffix') suffix: string;
  @Input('placeholder') placeholder: string;
  @Input('text') text: string;
  @Input('hint') hint: string;
  @Input('error') error: Function;
  @Input('errorMessage') errorMessage: string;
  @Input('errorValidators') errorValidators: [];
  validator: FormGroup;

  constructor() { }

  ngOnInit() {
    this.validator = new FormGroup({
      'validator': new FormControl(this.text, this.errorValidators),
    });
  }

  get validate() { return this.validator.get('validator'); }

}
