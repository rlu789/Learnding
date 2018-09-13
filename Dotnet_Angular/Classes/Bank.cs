using System;
using System.Collections.Generic;
using System.Linq;

namespace Dotnet_Angular.Classes
{
    public class Bank
    {
        public int Id { get; set; } // for database purposed only

        private int savingsAccountNumber = 1;
        private int loanAccountNumber = 1;
        public IList<Account> AccountList { get; set; }
        public IList<StatementRow> TransactionLog { get; set; }

        private string CreateAccountNumber(string prefix)
        {
            string num = "";
            if (prefix.Contains("LN"))
                num = loanAccountNumber++.ToString();
            else
                num = savingsAccountNumber++.ToString();
            num = num.PadLeft(7 - num.Length, '0');
            return prefix + num;
        }

        public Account OpenHomeLoanAccount(string customerName, DateTimeOffset openDate)
        {
            Account loanAccount = new Account(customerName, openDate);
            loanAccount.AccountNumber = CreateAccountNumber("LN-");
            return loanAccount;
        }
        public Account OpenSavingsAccount(string customerName, DateTimeOffset openDate)
        {
            Account savingsAccount = new Account(customerName, openDate);
            savingsAccount.AccountNumber = CreateAccountNumber("SV-");
            return savingsAccount;
        }

        public void PerformDeposit(Account account, decimal amount, string description, DateTimeOffset depositDate)
        {
            Account acc = AccountList.Cast<Account>().SingleOrDefault(i => i.AccountNumber == account.AccountNumber);
            acc.Balance += amount;
            TransactionLog.Add(new StatementRow(acc, depositDate, amount, acc.Balance, description));
        }
    }
}
