using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Dotnet_Angular.Classes;

namespace Dotnet_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankController : ControllerBase
    {
        public class DespositBodyContent
        {
            public Account acc { get; set; }
            public decimal amount { get; set; }
            public string desc { get; set; }
        }

        private BankContext _context;
        public BankController(BankContext context)
        {
            _context = context;
            //if (_context.AccountList.Count() == 0)
            //{
            //    //_context.SaveChanges();
            //    //_context.Bank.First().AccountList.Add( _context.Bank.First().OpenHomeLoanAccount("test", DateTimeOffset.Now));
            //    _context.SaveChanges();
            //}
        }

        [HttpPut("init")]
        public ActionResult<IList<Account>> Init()
        {
            _context.CreateMockData();
            _context.SaveChanges();
            return _context.AccountList.ToArray();
        }

        [HttpGet]
        public ActionResult<IList<Account>> GetAll()
        {
            System.Threading.Thread.Sleep(200);
            return _context.AccountList.ToArray();
        }

        [HttpGet("log")]
        public ActionResult<IList<StatementRow>> GetLog()
        {
            System.Threading.Thread.Sleep(200);
            return _context.TransactionLog.ToArray();
        }

        [HttpPut("openSaving")]
        public ActionResult OpenSavings(string name)
        {
            _context.OpenSavingsAccount(name, DateTimeOffset.Now);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPut("openLoan")]
        public ActionResult OpenLoan(string name)
        {
            _context.OpenHomeLoanAccount(name, DateTimeOffset.Now);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPut("deposit")]
        public ActionResult<IList<StatementRow>> Deposit(DespositBodyContent body)
        {
            _context.PerformDeposit(body.acc, body.amount, body.desc, DateTimeOffset.Now);
            _context.SaveChanges();
            return _context.TransactionLog.ToList();
        }

        [HttpPut("withdraw")]
        public ActionResult<IList<StatementRow>> Withdraw(DespositBodyContent body)
        {
            _context.PerformWithdrawal(body.acc, body.amount, body.desc, DateTimeOffset.Now);
            _context.SaveChanges();
            return _context.TransactionLog.ToList();
        }
    }
}
