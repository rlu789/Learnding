import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../../Services/exercises.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-component-library',
  templateUrl: './component-library.component.html',
  styleUrls: ['./component-library.component.css']
})
export class ComponentLibraryComponent implements OnInit {
  formGroup1: any;
  formGroup4: any;
  formGroup4Text = '';

  constructor(private exercisesService: ExercisesService) { }

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
