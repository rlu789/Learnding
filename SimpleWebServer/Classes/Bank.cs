using System;
using System.Collections.Generic;

namespace ReadifyBank.Interfaces
{
    public class Bank : IReadifyBank
    {
        private class Account : IAccount
        {
            public Account(string customerName, DateTimeOffset openDate)
            {
                OpenedDate = openDate;
                CustomerName = customerName;
                Balance = 0;
            }

            public DateTimeOffset OpenedDate { get; set; }
            public string CustomerName { get; set; }
            public string AccountNumber { get; set; }
            public decimal Balance { get; set; }
        }



        private int savingsAccountNumber;
        private int loanAccountNumber;
        public IList<IAccount> AccountList { get; private set; }
        public Bank()
        {
            savingsAccountNumber = 0;
            loanAccountNumber = 0;
            AccountList = new List<IAccount>();
        }

        public IAccount OpenHomeLoanAccount(string customerName, DateTimeOffset openDate)
        {
            Account loanAccount = new Account(customerName, openDate);
            loanAccount.AccountNumber = "LN-" + loanAccountNumber++.ToString();
            return loanAccount;
        }
        public IAccount OpenSavingsAccount(string customerName, DateTimeOffset openDate)
        {
            Account savingsAccount = new Account(customerName, openDate);
            savingsAccount.AccountNumber = "SV-" + savingsAccountNumber++.ToString();
            return savingsAccount;
        }
    }
}
