using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using Microsoft.AspNetCore.Mvc;

using Dotnet_Angular.Classes;

namespace Dotnet_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        private static StringResult Execute<T>(Func<T> func)
        {
            Stopwatch stopwatch = Stopwatch.StartNew();
            var result = func();
            return new StringResult(stopwatch.Elapsed.ToString(), result.ToString());
        }
        
        public struct StringResult
        {
            public string duration { get; set; }
            public string result { get; set; }
            //public long memoryUsed;
            public StringResult(string duration, string result)
            {
                this.duration = duration;
                this.result = result;
            }
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

        [HttpPost("fib")]
        public StringResult Fib([FromBody] long num)
        {
            return Execute(() => Exercises.Fib(num));
        }
        [HttpPost("fibRecursive")]
        public StringResult FibRecursive([FromBody] long num)
        {
            return Execute(() => Exercises.FibRecursive(num));
        }

        [HttpPost("matchingPairs")]
        public StringResult MatchingPairs([FromBody] List<string> input)
        {
            return Execute(() => Exercises.MatchingPairs(input));
        }

        public class BigSpenderBody{
            public int money { get; set; }
            public List<int> itemSetOne { get; set; }
            public List<int> itemSetTwo { get; set; }
        }
        [HttpPost("bigSpender")]
        public StringResult BigSpender([FromBody] BigSpenderBody content)
        {
            return Execute(() => Exercises.BigSpender(content.money, content.itemSetOne, content.itemSetTwo));
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
    }
}
