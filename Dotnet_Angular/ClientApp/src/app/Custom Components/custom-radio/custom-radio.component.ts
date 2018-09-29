import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdManagerService } from '../../Injectables/id-manager.service'

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.css']
})
export class CustomRadioComponent implements OnInit {
  @Input('radioOptions') radioOptions: {text: string, value: string}[];
  @Input('formGroup') formGroup: FormGroup;
  @Input('label') label: string;
  radioId: string

  constructor(private idManagerService: IdManagerService) { }

  ngOnInit() {
    this.radioId = this.idManagerService.generateId('radio-');
    console.log(this.radioId);
  }

}
