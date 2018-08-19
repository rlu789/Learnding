using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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
            System.Threading.Thread.Sleep(1000);
            return bank.AccountList.ToList();
        }

        
    }
}
