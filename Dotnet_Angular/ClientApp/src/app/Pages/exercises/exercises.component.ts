import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  arrayFormatFunc = function (payload: string) {
    return payload.split(' ');
  }

  exercises = [
    {
      name: 'Sorting',
      desc: '',
      buttons: [
        {
          text: 'Bubble',
          apiPath: '/bubble',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'arr',
          inputType: 'text',
          placeholder: 'Array',
          formatFunc: this.arrayFormatFunc
        },
      ]
    },
    {
      name: 'Construct Array',
      desc: '<p>Given <b>array length</b>, <b>range</b> and the <b>final value in an array</b> inputs, it should be possible to construct an array such that consecutive positions contain different values.' +
      ' The range of these values is determined by the <b>range</b> input i.e. 1 - <b>range</b></p>' +
      '<p>Return the <b>number of ways the array can be constructed</b> given these inputs.</p>',
      buttons: [
        {
          text: 'Construct',
          apiPath: '/constructArray',
        }
      ],
      inputs: [
        {
          payload: '',
          payloadName: 'length',
          inputType: 'number',
          placeholder: 'Length'
        },
        {
          payload: '',
          payloadName: 'range',
          inputType: 'number',
          placeholder: 'Range'
        },
        {
          payload: '',
          payloadName: 'final',
          inputType: 'number',
          placeholder: 'Final Value in Array'
        }
      ]
    },
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
          formatFunc: this.arrayFormatFunc
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
          formatFunc: this.arrayFormatFunc
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
          formatFunc: this.arrayFormatFunc
        },
        {
          payload: '',
          payloadName: 'itemSetTwo',
          inputType: 'text',
          placeholder: 'Item Shop Set 2',
          formatFunc: this.arrayFormatFunc
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
          formatFunc: this.arrayFormatFunc
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
