using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Dotnet_Angular.Interfaces;
using Dotnet_Angular.Classes;

namespace Dotnet_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankController : Controller
    {
        public class PutBody
        {
            public Account acc { get; set; }
            public decimal amount { get; set; }
            public string desc { get; set; }
        }

        private Bank bank;
        public BankController() {
            bank = new Bank();
        }   

        [HttpGet]
        public ActionResult<IList<IAccount>> GetAll()
        {
            System.Threading.Thread.Sleep(500);
            return bank.AccountList.ToList();
        }
        
        [HttpGet("log")]
        public ActionResult<IList<IStatementRow>> GetLog()
        {
            System.Threading.Thread.Sleep(500);
            return bank.TransactionLog.ToList();
        }

        [HttpPut("deposit")]
        public ActionResult<IList<IStatementRow>> Deposit(PutBody body)
        {
            bank.PerformDeposit(body.acc, body.amount, body.desc, DateTimeOffset.Now);
            return bank.TransactionLog.ToList();
        }


    }
}
