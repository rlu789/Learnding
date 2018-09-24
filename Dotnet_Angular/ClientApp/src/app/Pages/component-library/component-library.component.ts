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
