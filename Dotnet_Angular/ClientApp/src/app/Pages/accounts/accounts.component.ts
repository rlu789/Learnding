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
  @ViewChildren('descInputs') descInputs;

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

  createBankData() {
    var self = this;
    $.ajax({
      url: "api/bank/init",
      type: 'PUT',
      accepts: 'application/json'
    })
      .done(function (response) {
        self.accounts = response;
      })
  }

  deposit(index) {
    var self = this;
    var data = {
      acc: self.accounts[index],
      amount: +this.numberInputs.toArray()[index].nativeElement.value,
      desc: this.descInputs.toArray()[index].nativeElement.value
    };
    $.ajax({
      url: "api/bank/deposit",
      type: 'PUT',
      accepts: 'application/json',
      contentType: 'application/json',
      data: JSON.stringify(data),
    })
      .done(function (result) {
        console.log(result);
        self.accounts[index].balance = result[result.length - 1].balance;
        self.logs = result;
      });
  }

  withdraw(index) {
    var self = this;
    var data = {
      acc: self.accounts[index],
      amount: +this.numberInputs.toArray()[index].nativeElement.value,
      desc: this.descInputs.toArray()[index].nativeElement.value
    };
    $.ajax({
      url: "api/bank/withdraw",
      type: 'PUT',
      accepts: 'application/json',
      contentType: 'application/json',
      data: JSON.stringify(data),
    })
      .done(function (result) {
        console.log(result);
        self.accounts[index].balance = result[result.length - 1].balance;
        self.logs = result;
      });
  }

}
