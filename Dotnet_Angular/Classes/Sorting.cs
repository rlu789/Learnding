using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Numerics;

namespace Dotnet_Angular.Classes
{
    public class Sorting {
        public static List<int> BubbleSort(List<int> arr){
            for (int i = 0; i < arr.Count; i++){
                for (int j = 0; j < arr.Count - 1; j++){
                    if (arr[j] > arr[j + 1]){
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }

            return arr;
        }
    }
}