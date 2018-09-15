import { Component, OnInit, Input } from '@angular/core';
import { ExercisesService } from '../../Services/exercises.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-exercise-component',
  templateUrl: './exercise-component.component.html',
  styleUrls: ['./exercise-component.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input('params') params: any;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
  }

  send() {
    this.exercisesService.exercise('/reverse', this.params.payload).subscribe(
      (data: any) => console.log(data),
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      });
  }
}
