import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../../Services/exercises.service';
import { HttpErrorResponse } from '@angular/common/http';

import { ModalService } from '../../Custom Components/custom-modal/modal.service';
import { ComponentLibraryComponent } from '../component-library/component-library.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  duration: number;
  result: string;
  loading = false;
  constructor(private exercisesService: ExercisesService, 
    private modalService: ModalService) { }

  ngOnInit() {
  }

  test() {
    this.loading = true;
    this.exercisesService.test(this.duration)
      .subscribe(
        (data: any) => this.result = data,
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
        },
        () => { this.loading = false; }
      );
  }

  modal(){
    let inputs = {
      isMobile: false
    }
    this.modalService.init(ComponentLibraryComponent, inputs, {});
  }
}
