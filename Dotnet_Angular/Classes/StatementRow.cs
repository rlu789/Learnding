using System;
using Dotnet_Angular.Interfaces;

namespace Dotnet_Angular.Classes
{
    class StatementRow : IStatementRow
    {
        public StatementRow(IAccount account, DateTimeOffset date, Decimal amount, Decimal balance, string desc)
        {
            Account = account;
            Date = date;
            Amount = amount;
            Balance = balance;
            Description = desc;
        }

        public IAccount Account { get; set; }
        public DateTimeOffset Date { get; set; }
        public decimal Amount { get; set; }
        public decimal Balance { get; set; }
        public string Description { get; set; }
    }
}
