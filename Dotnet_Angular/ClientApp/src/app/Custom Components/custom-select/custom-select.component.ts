import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdManagerService } from '../../Injectables/id-manager.service'

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  @Input('selectOptions') selectOptions: any[];
  @Input('formGroup') formGroup: FormGroup;
  componentId: string

  constructor(private idManagerService: IdManagerService) { }

  ngOnInit() {
    this.componentId = this.idManagerService.generateId('select');
  }
}
