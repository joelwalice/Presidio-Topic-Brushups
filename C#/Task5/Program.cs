using System;
using System.IO;

namespace Task4
{
    class Program
    {
        static void Main(string[] args)
        {
            try{
                StreamReader sr = new StreamReader("./read.txt");
                StreamWriter sw = new StreamWriter("./write.txt", true);
                string line = sr.ReadLine();
                Console.WriteLine("Reading from read.txt file");
                while (line != null)
                {
                    Console.WriteLine(line);
                    if (line != null) sw.WriteLine(line);
                    Console.WriteLine("Output written in write.txt file");
                    line = sr.ReadLine();
                }
                sr.Close();
                sw.Close();
            }
            catch(Exception e){
                Console.WriteLine("An error occurred: " + e.Message);
            }
            finally
            {
                Console.WriteLine("Execution completed.");
            }
        }
    }
}