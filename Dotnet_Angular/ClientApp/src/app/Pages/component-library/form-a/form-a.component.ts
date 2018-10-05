import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ErrorManagerService } from '../../../Injectables/error-manager.service'

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
  customTextTwo = {
    placeholder: 'Form Input 2',
    formGroup: new FormGroup({
      'validator': new FormControl('', [
        this.rangeValidator(10, 20)
      ]),
    }),
    hint: 'This field value must be between 10 and 20'
  }
  customTextThree = {
    placeholder: 'Form Input 3',
    formGroup: new FormGroup({
      'validator': new FormControl('', [
        this.formGroupsValidator(this.customTextOne.formGroup, this.customTextTwo.formGroup),
        this.rangeValidator(100, 200)
      ]),
    }),
    hint: 'Errors if first two inputs and incorrect AND input has to be between 100 and 200'
  }
  customTextFour = {
    label: 'Alert Type',
    formGroup: new FormGroup({
      'validator': new FormControl('i', []),
    }),
    radioOptions: [
      { text: 'Warning', value: 'w' },
      { text: 'Information', value: 'i' },
      { text: 'Error', value: 'e' },
      { text: 'Success', value: 's' }
    ]
  }
  customTextFive = {
    placeholder: 'Alert Text',
    formGroup: new FormGroup({
      'validator': new FormControl('This is a dynamic alert. Feel free to change me below.', []),
    }),
    hint: 'Sets the content of the alert'
  }

  rangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } | null => {
        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
          return { 'range': 'Input must be between ' + min + ' and ' + max };
        } 
        return null;
    };
  }

  formGroupsValidator(form1: FormGroup, form2: FormGroup): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } | null => {
      if (control.dirty){
        form1.valueChanges.subscribe(changes => {
          if (form1.invalid){
            control.markAsTouched();
            control.markAsDirty();
          }
          else {
            control.markAsPristine();
            control.markAsUntouched();
          }
          control.updateValueAndValidity();
        });
        form2.valueChanges.subscribe(changes => {
          if (form2.invalid || changes.validator === ''){
            control.markAsTouched();
            control.markAsDirty();
          }
          else {
            control.markAsPristine();
            control.markAsUntouched();
          }
          control.updateValueAndValidity();
        });
      }
      if (form1.invalid && form1.dirty || form2.invalid && form2.dirty) {
        return { 'invalidForms': 'Cross form validation errors' };
      }
      return null;
    };
  }

  customCheckbox = {
    label: 'Is Alert Visible?',
    formGroup: new FormGroup({
      'validator': new FormControl(true, []),
    }),
  }
  constructor(private renderer: Renderer2,
    private errorManagerService: ErrorManagerService) { }

  ngOnInit() {
    // this.customTextOne.formGroup.markAsDirty();
    // this.customTextOne.formGroup.markAsTouched();
    // this.customTextOne.formGroup.updateValueAndValidity();
  }

  focus($event){ 
    document.getElementById(this.customTextOne.formGroup.get('componentId').value).scrollIntoView({behavior: "smooth"});
    $event.complete();
  }

  submit($event){
  }
}
