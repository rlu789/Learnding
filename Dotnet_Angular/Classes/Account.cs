using System;
using System.ComponentModel.DataAnnotations;

namespace Dotnet_Angular.Classes
{
    public class Account 
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
