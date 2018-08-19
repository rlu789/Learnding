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
        private Bank bank = new Bank();

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
        public IActionResult Deposit(Account acc)
        {
            return NoContent();
        }


    }
}
