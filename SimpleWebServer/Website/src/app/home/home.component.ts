import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  string: string;
  constructor() { }

  ngOnInit() {
  }

  test() {
    $.ajax({
      type: 'post',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: {
        data: this.string,
        another: this.string
      },
      url: 'http://localhost:8080/',
    })
      .done(function (response) {
        console.log(response);
      });
  }

}
