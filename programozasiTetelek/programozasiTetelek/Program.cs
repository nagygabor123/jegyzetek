using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace programozasiTetelek
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] t = { 8, 9, 5, 4, 1, 9, 7, 3, 5, 4, 2, 6 };
            int n = 5;

            #region Összegzés tétel
            Console.WriteLine("Összegzés");
            int osszeg = 0;
            for (int i = 0; i < n; i++)
                osszeg = osszeg + t[i];
            Console.WriteLine("\tÖsszeg: " + osszeg);
            #endregion

            #region Megszámolás tétel
            Console.WriteLine("Megszámolás");
            int c = 0;
            for (int i = 0; i < t.Length; i++)
                if (t[i] < 5)
                    c++;

            Console.WriteLine("\t5-nél kisebb számok darabszáma: {0}", c);
            #endregion


            #region Eldöntés tétel
            Console.WriteLine("Eldöntés 1");
            int ker = 5;
            bool van = false;
            for (int i = 0; i < n; i++)
                if (t[i] == ker)
                    van = true;

            Console.WriteLine("\tIgaz-e, hogy van 5-ös a tömbben?: {0}", van);

            Console.WriteLine("Eldöntés 2");
            int a = 0;
            while (a < n && t[a] != ker)
                a++;

            if (a < n)
                Console.WriteLine("\tBenne van ");
            else
                Console.WriteLine("\tNincs benne");
            #endregion


            #region Kiválasztás tétel
            Console.WriteLine("Kiválasztás");
            int b = 0;
            while (t[b] != ker)
                b++;

            Console.WriteLine("\tAz 5-ös indexe: {0}", b);
            #endregion


            #region Keresés tétel
            Console.WriteLine("Keresés");
            int z = 0;
            while (z < n && t[z] != ker)
                z++;

            if (z < n)
                Console.WriteLine("\tIndexe: {0}", z);
            else
                Console.WriteLine("\tNincs benne");
            #endregion

            #region Kiválogatás tétel
            Console.WriteLine("Kiválogatás");
            int[] f = new int[n];

            int j = 0;
            for (int i = 0; i < n; i++)
                if (t[i] < 5)  //Az 5-nél kisebb számokat válogatjuk
                {
                    f[j] = t[i];
                    j++;
                }

            Console.WriteLine("\tEredeti:");
            for (int i = 0; i < n; i++)
                Console.Write("{0} ", t[i]);
            Console.WriteLine();

            Console.WriteLine("\tKiválogatott:");
            for (int i = 0; i < j; i++)
                Console.Write("{0} ", f[i]);
            Console.WriteLine();
            #endregion

            #region valami
            #endregion

            #region valami
            #endregion

            #region valami
            #endregion

            #region valami
            #endregion

            Console.ReadKey();
        }
    }
}
