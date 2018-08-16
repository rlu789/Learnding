import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) { }

  test() {
    $.ajax({
      type: 'post',
      contentType: "application/json; charset=utf-8",
      dataType: 'jsonp',
      data: {
        data: "test"
      },
      url: 'http://localhost:8080/',
    })
      .then(function (response) {
        console.log(response);
      })
      .always(function (response) {
        console.log(response);
      });
  }
}
