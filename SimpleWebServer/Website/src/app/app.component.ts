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
  string: string;

  constructor(private http: HttpClient) { }

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
      .always(function (response) {
        console.log(response);
        console.log(response.responseText);
      });
  }
}
