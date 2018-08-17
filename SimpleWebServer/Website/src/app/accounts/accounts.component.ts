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
      type: 'post',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: {
        request: "getAccountList"
      },
      url: 'http://localhost:8080/',
    })
      .done(function (response) {
        console.log(response);
      });
  }

}
