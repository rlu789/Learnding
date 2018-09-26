import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent implements OnInit {
  customTextOne = {
    placeholder: 'Form Input 1',
    formGroup: new FormGroup({
      'validator': new FormControl('', [
        Validators.required
      ]),
    }),
    hint: 'This is a required field'
  }

  constructor() { }

  ngOnInit() {
  }

}
