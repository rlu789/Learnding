using System;
using System.Collections.Generic;
using System.Linq;
using Dotnet_Angular.Interfaces;

namespace Dotnet_Angular.Classes
{
    public class Bank : IReadifyBank
    {
        private int savingsAccountNumber;
        private int loanAccountNumber;
        public IList<IAccount> AccountList { get; private set; }
        public IList<IStatementRow> TransactionLog { get; private set; }
        public Bank()
        {
            savingsAccountNumber = 1;
            loanAccountNumber = 1;
            AccountList = new List<IAccount>();
            TransactionLog = new List<IStatementRow>();
            CreateMockData();
        }

        private void CreateMockData()
        {
            AccountList.Add(OpenHomeLoanAccount("Mr Loan", DateTimeOffset.Now));
            AccountList.Add(OpenSavingsAccount("Mr Savings", DateTimeOffset.Now));
        }

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

        public IAccount OpenHomeLoanAccount(string customerName, DateTimeOffset openDate)
        {
            Account loanAccount = new Account(customerName, openDate);
            loanAccount.AccountNumber = CreateAccountNumber("LN-");
            return loanAccount;
        }
        public IAccount OpenSavingsAccount(string customerName, DateTimeOffset openDate)
        {
            Account savingsAccount = new Account(customerName, openDate);
            savingsAccount.AccountNumber = CreateAccountNumber("SV-");
            return savingsAccount;
        }

        public void PerformDeposit(IAccount account, decimal amount, string description, DateTimeOffset depositDate)
        {
            Account acc = (Account)AccountList.Cast<object>().SingleOrDefault(i => i == account);
            acc.Balance += amount;
            TransactionLog.Add(new StatementRow(acc, depositDate, amount, acc.Balance, description));
        }
    }
}
