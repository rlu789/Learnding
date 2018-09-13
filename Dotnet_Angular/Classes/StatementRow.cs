using System;

namespace Dotnet_Angular.Classes
{
    public class StatementRow
    {
        public int Id { get; set; } // for database purposed only
        public StatementRow() { }
        public StatementRow(Account account, DateTimeOffset date, decimal amount, decimal balance, string desc)
        {
            Account = account;
            Date = date;
            Amount = amount;
            Balance = balance;
            Description = desc;
        }

        public Account Account { get; set; }
        public DateTimeOffset Date { get; set; }
        public decimal Amount { get; set; }
        public decimal Balance { get; set; }
        public string Description { get; set; }
    }
}
