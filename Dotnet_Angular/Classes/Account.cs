using System;
using System.ComponentModel.DataAnnotations;
using Dotnet_Angular.Interfaces;

namespace Dotnet_Angular.Classes
{
    public class Account : IAccount 
    {
        public Account() { }
        public Account(string customerName, DateTimeOffset openDate)
        {
            OpenedDate = openDate;
            CustomerName = customerName;
            Balance = 0;
        }

        [Key]
        public string AccountNumber { get; set; }

        public DateTimeOffset OpenedDate { get; set; }
        public string CustomerName { get; set; }
        public decimal Balance { get; set; }
    }


}
