import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.ajax({
      type: 'GET',
      contentType: "application/json",
      url: 'api/bank',
    })
      .done(function (response) {
        console.log(response);
      });
  }

}
