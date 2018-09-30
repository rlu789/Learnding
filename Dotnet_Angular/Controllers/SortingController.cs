using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using Microsoft.AspNetCore.Mvc;

using Dotnet_Angular.Classes;

namespace Dotnet_Angular.Controllers
{
    [Route("api/exercises")] //TODO redo this so that [controller] can be used
    [ApiController]
    public class SortingController : ControllerBase
    {
        public struct SortingResult
        {
            public string duration { get; set; }
            public string result { get; set; }
            //public long memoryUsed;
            public SortingResult(string duration, string result)
            {
                this.duration = duration;
                this.result = result;
            }
        }
        private static SortingResult Execute(Func<List<int>> func)
        {
            Stopwatch stopwatch = Stopwatch.StartNew();
            List<int> result = func();
            string s = String.Join(", ", result.ToArray());
            return new SortingResult(stopwatch.Elapsed.ToString(), s);
        }
        
        [HttpPost("bubble")]
        public SortingResult Bubble([FromBody] List<int> arr)
        {
            return Execute(() => Sorting.BubbleSort(arr));
        }
    }
}
