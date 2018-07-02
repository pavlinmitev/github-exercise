using System;
using System.Numerics;
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            long snowballAmount = int.Parse(Console.ReadLine());

            BigInteger biggest = 0;
            long snowball = 0;
            long time = 0;
            long qualityy = 0;

            if (snowballAmount == 0)
            {
                
                return;
            }
            for (int i = 0; i < snowballAmount; i++)
            {
                long snowballSnow = long.Parse(Console.ReadLine());
                long snowballTime = long.Parse(Console.ReadLine());
               int snowballQuality = int.Parse(Console.ReadLine());
               BigInteger quality =BigInteger.Pow((snowballSnow / snowballTime),snowballQuality);
                
                if (quality >= biggest)
                {
                    time = snowballTime;
                    snowball = snowballSnow;
                    biggest = quality;
                    qualityy = snowballQuality;
                    

                }
            }
            Console.WriteLine($"{snowball} : {time} = {biggest} ({qualityy})");

        }
    }
}
