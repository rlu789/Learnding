import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../../Services/exercises.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  duration: number;
  result: string
  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
  }

  test() {
    this.exercisesService.test(this.duration)
      .subscribe(
        (data: any) => this.result = data,
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
        });
  }

}
