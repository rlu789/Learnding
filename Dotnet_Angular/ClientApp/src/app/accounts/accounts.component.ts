import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: any[];
  loading = true;

  constructor() { }

  ngOnInit() {
    var self = this;
    $.ajax({
      type: 'GET',
      contentType: "application/json",
      url: 'api/bank',
      success: function (response) {
        self.accounts = response;
        console.log(self.accounts);
        self.loading = false;
      }
    });
  }

}
