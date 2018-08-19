using System;
using System.Collections.Generic;

namespace Dotnet_Angular
{
    public class Bank : IReadifyBank
    {
        private int savingsAccountNumber;
        private int loanAccountNumber;
        public IList<IAccount> AccountList { get; private set; }
        public Bank()
        {
            savingsAccountNumber = 0;
            loanAccountNumber = 0;
            AccountList = new List<IAccount>();
            AccountList.Add(OpenHomeLoanAccount("Mr Loan", DateTimeOffset.Now));
            AccountList.Add(OpenSavingsAccount("Mr Savings", DateTimeOffset.Now));
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
