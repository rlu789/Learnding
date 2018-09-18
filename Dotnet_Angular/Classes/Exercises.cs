using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dotnet_Angular.Classes
{
    public class Exercises
    {
        public static int SockMerchant(List<string> socks)
        {
            int matches = 0;
            Dictionary<string, int> matchingSocks = new Dictionary<string, int>();

            foreach (string sock in socks)
            {
                if (matchingSocks.ContainsKey(sock))
                // if theres already one sock, then now we have a pair
                // increment and then delete key
                {
                    matchingSocks.Remove(sock);
                    matches++;
                }
                else matchingSocks[sock] = 0;
            }
            return matches;
        }

        public static long Fib(long num)
        {
            if (num == 0) return 0;
            if (num == 1) return 1;

            long cur = 0;
            long next = 1;
            long res = 0;
            while (num-- - 2 >= 0)
            {
                res = cur + next;
                cur = next;
                next = res;
            }
            return res;
        }

        public static ulong FibRecursive(long num)
        {
            if (num == 0) return 0;
            if (num == 1) return 1;
            return FibRecursive(num - 1) + FibRecursive(num - 2);
        }
    }
}
