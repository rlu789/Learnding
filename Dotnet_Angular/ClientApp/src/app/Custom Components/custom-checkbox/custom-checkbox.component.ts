import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdManagerService } from '../../Injectables/id-manager.service'

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css']
})
export class CustomCheckboxComponent implements OnInit {
  @Input('formGroup') formGroup: FormGroup;
  @Input('label') label: string;
  componentId: string

  constructor(private idManagerService: IdManagerService) { }

  ngOnInit() {
    this.componentId = this.idManagerService.generateId('checkbox-');
  }

}
