using System;
using Dotnet_Angular.Interfaces;

namespace Dotnet_Angular.Classes
{
    public class Account : IAccount 
    {
        public int Id { get; set; } // for database purposed only
        public Account() { }
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


}
