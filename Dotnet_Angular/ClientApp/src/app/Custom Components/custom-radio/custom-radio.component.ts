import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.css']
})
export class CustomRadioComponent implements OnInit {
  radioOptions = [
    {
      text: 'Yes',
      value: 'Y'
    },
    {
      text: 'No',
      value: 'N'
    }
  ]

  form = new FormGroup({
    boolean: new FormControl('Y'),
  });
  
  constructor() { }

  ngOnInit() {
  }

}
