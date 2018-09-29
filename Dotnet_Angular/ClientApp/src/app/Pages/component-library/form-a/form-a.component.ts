import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

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
        this.ageRangeValidator(10, 20)
      ]),
    }),
    hint: 'This field value must be between 10 and 20'
  }
  customTextThree = {
    placeholder: 'Form Input 3',
    formGroup: new FormGroup({
      'validator': new FormControl('', [
        this.fromGroupsValidator(this.customTextOne.formGroup, this.customTextTwo.formGroup)
      ]),
    }),
    hint: 'Errors if first two inputs and incorrect'
  }
  customTextFour = {
    label: 'Alert Type',
    formGroup: new FormGroup({
      'validator': new FormControl('i', []),
    }),
    radioOptions: [{text: 'Warning',value: 'w'},{ text: 'Information', value: 'i' },{ text: 'Success', value: 's' }]
  }
  customTextFive = {
    placeholder: 'Alert Text',
    formGroup: new FormGroup({
      'validator': new FormControl('This is a dynamic alert. Feel free to change me below.', []),
    }),
    hint: 'Sets the content of the alert'
  }

  ageRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
          return { 'ageRange': true };
        } 
        return null;
    };
  }

  fromGroupsValidator(form1: FormGroup, form2: FormGroup): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      form1.valueChanges.subscribe(changes => {
        if (form1.invalid){
          control.markAsTouched();
        }
        else control.markAsUntouched();
        control.updateValueAndValidity();
      });
      form2.valueChanges.subscribe(changes => {
        if (form2.invalid){
          control.markAsTouched();
        }
        else control.markAsUntouched();
        control.updateValueAndValidity();
      });
      if (form1.invalid || form2.invalid) {
        return { 'invalidForms': true };
      }
      return null;
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
