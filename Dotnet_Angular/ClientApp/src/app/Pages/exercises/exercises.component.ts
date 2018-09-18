import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  exercises = [
    {
      name: 'Matching Pairs',
      desc: '<b>Note:</b> Seperate items with a space',
      buttons: [
        {
          text: 'Matching Pairs',
          apiPath: '/matchingPairs',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'reverse',
          inputType: 'text',
          formatFunc: function (payload: string) {
            return payload.split(' ');
          }
        }
      ],
    },
    {
      name: 'Reverse String',
      buttons: [
        {
          text: 'Reverse',
          apiPath: '/reverse',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'reverse',
          inputType: 'text'
        }
      ],
    },
    {
      name: 'Fibonacci',
      desc: 'Calculates Fibonacco sequences with number starting at 0. Includes option for a recursive solution',
      buttons: [
        {
          text: 'Fibonacci',
          apiPath: '/fib',
        },
        {
          text: 'Fibonacci (Recursive)',
          apiPath: '/fibRecursive',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'num',
          inputType: 'number'
        }
      ],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
