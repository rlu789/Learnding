using System;
using System.Collections.Generic;
using Dotnet_Angular.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Dotnet_Angular.Controllers
{
    public static class GlobalVariables
    {
        public static int savingsAccountNumber = 1;
        public static int loanAccountNumber = 1;
    }

    public class BankContext : DbContext//, IReadifyBank
    {
        public BankContext(DbContextOptions<BankContext> options)
            : base(options)
        {
        }
        public DbSet<Account> AccountList { get; set; }
        public DbSet<StatementRow> TransactionLog { get; set; }

        public void CreateMockData()
        {
            AccountList.Add(OpenHomeLoanAccount("Mr Loan", DateTimeOffset.Now));
            AccountList.Add(OpenSavingsAccount("Mr Savings", DateTimeOffset.Now));
        }

        private string CreateAccountNumber(string prefix)
        {
            string num = "";
            if (prefix.Contains("LN"))
                num = GlobalVariables.loanAccountNumber++.ToString();
            else
                num = GlobalVariables.savingsAccountNumber++.ToString();
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
            Account acc = AccountList.Find(account.Id);
            acc.Balance += amount;
            AccountList.Update(acc);
            TransactionLog.Add(new StatementRow(acc, depositDate, amount, acc.Balance, description));
        }
    }
}
