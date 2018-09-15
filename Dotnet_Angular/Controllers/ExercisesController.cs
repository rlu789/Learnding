using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Dotnet_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        public struct StringResult
        {
            public string duration;
            public string result;
            public StringResult(string duration, string result)
            {
                this.duration = duration;
                this.result = result;
            }
        }

        [HttpPost("test")]
        public string Test([FromBody] int duration)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            Thread.Sleep(duration * 1000);
            stopwatch.Stop();

            return stopwatch.Elapsed.ToString();
        }

        [HttpPost("reverse")]
        public StringResult Reverse([FromBody] string word)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            char[] arr = word.ToCharArray();
            Array.Reverse(arr);
            string result = new string(arr);

            stopwatch.Stop();
            return new StringResult(stopwatch.Elapsed.ToString(), result);
        }

    }
}
