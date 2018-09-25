import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  exercises = [
    {
      name: 'Pairs',
      desc: '<p>Given an <b>array of integers</b> and a <b>target value</b>, compute the number of pairs in the array that have a difference equal to the target value </p>'+
      '<p><i>E.g.:</i> [1, 2, 3, 4] results in an answer of <b>3</b></p>',
      buttons: [
        {
          text: 'Compute',
          apiPath: '/pairs',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'difference',
          inputType: 'number',
          placeholder: 'Target'
        },
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
      name: 'Equal',
      desc: '<a href="https://www.hackerrank.com/challenges/equal/problem" target="_blank"><i>Equal Problem</i></a>' +
      '<p>Done via realising that adding an amount to several values to match a <b>key value</b> is the same as substracting from that <b>key value.</b> ' +
      'Important as we only need the <i>minimum number of operations</i> and not the final result.<p>' +
      '<p>V2 refined to only loop through array once.<p>',
      buttons: [
        {
          text: 'Equalize',
          apiPath: '/equal',
        },
        {
          text: 'Equalize V2',
          apiPath: '/equalv2',
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
      desc: '<b>Note:</b> Implemented with <i>BigInteger</i>.',
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
      desc: '<b>Note:</b> Seperate each item in the shop with a space.',
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
      desc: '<b>Note:</b> Seperate items with a space.',
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
      desc: 'Calculates Fibonacco sequences with number starting at 0. Includes option for a recursive solution.',
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
