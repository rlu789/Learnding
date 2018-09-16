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
  @Input('buttons') buttons: { apiPath: string, text: string, loading: boolean}[];
  @Input('inputs') inputs: { payload: string, payloadName: string,inputType: string }[];

  result: string;
  duration: string;
  memoryUsed: string;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
  }

  send(i: number) {
    this.buttons[i].loading = true;

    var payload = {};
    this.inputs.forEach((input) => {
      payload[input.payloadName] = input.payload;
    });

    this.exercisesService.exercise(this.buttons[i].apiPath, payload).subscribe(
      (data: any) => {
        console.log(data);
        this.result = data.result;
        this.duration = data.duration;
      },
      (err: HttpErrorResponse) => {
        this.buttons[i].loading = false;
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      },
      () => { this.buttons[i].loading = false; }
    );
  }
}
