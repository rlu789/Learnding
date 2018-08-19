import { Component, OnInit, ViewChildren } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: any[];
  logs: any[];
  loading = true;
  @ViewChildren('numberInputs') numberInputs;

  constructor() { }

  ngOnInit() {
    var self = this;
    var bank = function (self) {
      return $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'api/bank',
      })
        .done(function (response) {
          self.accounts = response;
        });
    };

    var log = function (self) {
      return $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'api/bank/log',
      })
        .done(function (response) {
          self.logs = response;
        });;
    };

    Promise.all([bank(self), log(self)]).then(function () {
      self.loading = false;
    })
  }

  deposit(index) {
    var self = this;
    var acc = self.accounts[index];
    acc.balance += +this.numberInputs.toArray()[index].nativeElement.value;
    //var body = { id: self.accounts[index].accountNumber, amount: +this.numberInputs.toArray()[index].nativeElement.value};
    $.ajax({
      url: "api/bank/deposit",
      type: 'PUT',
      accepts: 'application/json',
      contentType: 'application/json',
      data: JSON.stringify(acc),
      success: function (result) {
      }
    });
  }

}
