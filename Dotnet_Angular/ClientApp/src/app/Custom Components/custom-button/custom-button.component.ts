import { Component, OnInit, Input } from '@angular/core';
import { ExercisesService } from '../../Services/exercises.service';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  loading = false;
  @Input('clickFunc') clickFunc: Function;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
  }

  click(){
    console.log("BUTTON CLICKED");
    var self = this;
    this.loading = true;

    //TODO find a new way to do this.
    return new Promise(resolve => {
      resolve(self.clickFunc());
    }).then(function(){
      self.loading = false;
    });
  }
}
