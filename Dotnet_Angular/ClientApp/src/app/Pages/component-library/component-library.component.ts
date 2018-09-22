import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../../Services/exercises.service';

@Component({
  selector: 'app-component-library',
  templateUrl: './component-library.component.html',
  styleUrls: ['./component-library.component.css']
})
export class ComponentLibraryComponent implements OnInit {
  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
  }

  public error(input: string){
    if (input === undefined || input.length < 3) return true
  }

  btnFunc(){
    return new Promise(function(resolve, reject) {
      setTimeout(function() { 
        alert("Close me to stop button animation")
        resolve(true);
      }, 2000);
    });
  }

  btnFunc2(){
    return new Promise(function(resolve, reject) {
      setTimeout(function() { 
        resolve(true);
      }, 2000);
    });
  }

  btnServiceCall(){
    var self = this;
    return new Promise(function(resolve, reject) {
      // >:(
      self.exercisesService.test(1)
        .subscribe((data: any) => { 
          console.log(data);
          resolve(true);
        });
    });
  }
}
