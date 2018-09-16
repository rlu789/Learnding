using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dotnet_Angular.Classes
{
    public class Exercises
    {
        public static int Fib(int num)
        {
            if (num == 0) return 0;
            if (num == 1) return 1;

            int cur = 0;
            int next = 1;
            int res = 0;
            while (num-- - 2 >= 0)
            {
                res = cur + next;
                cur = next;
                next = res;
            }
            return res;
        }

        public static int FibRecursive(int num)
        {
            if (num == 0) return 0;
            if (num == 1) return 1;
            return FibRecursive(num - 1) + FibRecursive(num - 2);
        }
    }
}
