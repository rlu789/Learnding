import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../../Services/exercises.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ModalService } from '../../Custom Components/custom-modal/modal.service';
import { FormAComponent } from './form-a/form-a.component';

@Component({
  selector: 'app-component-library',
  templateUrl: './component-library.component.html',
  styleUrls: ['./component-library.component.css']
})
export class ComponentLibraryComponent implements OnInit {
  formGroupAccordion = new FormGroup({
    'validator': new FormControl('Prefilled', [
      Validators.required
    ]),
  });
  formGroupAccordion2 = new FormGroup({
    'validator': new FormControl('Prefilled again', [
      Validators.required
    ]),
  });
  accordionDataSet = [this.formGroupAccordion, this.formGroupAccordion2];
  accordionSubmit($event, record: FormGroup){ 
    alert("Field value: " + record.get('validator').value);
    $event.complete();
  }

  radioOptions = [{text: 'Yes',value: 'Y'},{ text: 'No', value: 'N' }];
  radioOptionsFormGroup = new FormGroup({
    'validator': new FormControl('Y', [
      Validators.required,
    ]),
  });
  radioOptions2 = [{text: 'One',value: '1'},{ text: 'Two', value: '2' },{ text: 'Three', value: '3' }];
  radioOptionsFormGroup2 = new FormGroup({
    'validator': new FormControl('', [
      Validators.required,
    ]),
  });

  selectOptions = [{text: 'One',value: '1'},{ text: 'Two', value: '2' },{ text: 'Three', value: '3' }];
  selectOptionsFormGroup = new FormGroup({
    'validator': new FormControl('', [
      Validators.required,
    ]),
  });

  formGroup1: any;
  formGroup4: any;
  formGroup4Text = '';

  constructor(private exercisesService: ExercisesService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.formGroup4 = new FormGroup({
      'validator': new FormControl(this.formGroup4Text, [
        Validators.required,
        Validators.minLength(3)
      ]),
    });
    this.formGroup1 = new FormGroup({
      'validator': new FormControl(this.formGroup4Text, []),
    });
  }
  
  modal($event){ 
    let inputs = {
      isMobile: false
    }
    this.modalService.init(FormAComponent, inputs, {});
    $event.complete();
  }

  btnFunc($event){ 
    alert("Alert!");
    $event.complete();
  }

  btnFunc2($event){
    setTimeout(function() { 
      alert("Alert!");
      $event.complete();
    }, 2000);
  }

  btnServiceCall($event){
    var self = this;
    self.exercisesService.test(100)
      .subscribe((data: any) => { 
        console.log(data);
        $event.complete();
      });
  }
}
