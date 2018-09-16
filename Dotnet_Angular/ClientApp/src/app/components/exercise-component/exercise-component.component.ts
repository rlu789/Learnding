import { Component, OnInit, Input } from '@angular/core';
import { ExercisesService } from '../../Services/exercises.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-exercise-component',
  templateUrl: './exercise-component.component.html',
  styleUrls: ['./exercise-component.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input('name') name: string;
  @Input('desc') desc: string;
  @Input('apiPath') apiPath: string;
  @Input('payload') payload: string;

  result: string;
  duration: string

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
  }

  send() {
    this.exercisesService.exercise('/reverse', this.payload).subscribe(
      (data: any) => {
        this.result = data.result
        this.duration = data.duration
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      });
  }
}
