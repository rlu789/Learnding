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
            savingsAccountNumber = 1;
            loanAccountNumber = 1;
            AccountList = new List<IAccount>();
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
    }
}
