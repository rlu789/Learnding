using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dotnet_Angular
{
    public class Account : IAccount
    {
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
