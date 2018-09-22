import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  exercises = [
    {
      name: 'Equal',
      desc: '<a href="https://www.hackerrank.com/challenges/equal/problem" target="_blank"><i>Equal Problem</i></a>' +
      '<br /> Done via realising that adding to several to match a value is the same as substracting from that key value. ' +
      'Important as we only need the <i>minimum number of operations</i> and not that actual final result',
      buttons: [
        {
          text: 'Equalize',
          apiPath: '/equal',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'input',
          inputType: 'text',
          formatFunc: function (payload: string) {
            return payload.split(' ');
          }
        }
      ]
    },
    {
      name: 'Factorial',
      desc: '<b>Note:</b> Implemented with <i>BigInteger</i>',
      buttons: [
        {
          text: 'Calculate',
          apiPath: '/factorial',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'num',
          inputType: 'number',
        }
      ]
    },
    {
      name: 'Big Spender',
      desc: '<b>Note:</b> Seperate each item in the shop with a space',
      buttons: [
        {
          text: 'Calculate',
          apiPath: '/bigSpender',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'money',
          inputType: 'number',
          placeholder: 'Money'
        },
        {
          payload: '',
          payloadName: 'itemSetOne',
          inputType: 'text',
          placeholder: 'Item Shop Set 1',
          formatFunc: function (payload: string) {
            return payload.split(' ');
          }
        },
        {
          payload: '',
          payloadName: 'itemSetTwo',
          inputType: 'text',
          placeholder: 'Item Shop Set 2',
          formatFunc: function (payload: string) {
            return payload.split(' ');
          }
        }
      ],
    },
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
          payloadName: 'input',
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
