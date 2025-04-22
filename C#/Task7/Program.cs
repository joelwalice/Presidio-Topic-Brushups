using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Task7
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("Fetching data from multiple sources...\n");

            var tasks = new List<Task<string>>
            {
                FetchDataFromSourceAsync("Source 1", 2000),
                FetchDataFromSourceAsync("Source 2", 1500),
                FetchDataFromSourceAsync("Source 3", 2500),
                FetchDataWithErrorAsync("Source 4 (Fails)", 1000)
            };

            var results = new List<string>();
            foreach (var task in tasks)
            {
                try
                {
                    string result = await task;
                    results.Add(result);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error: {ex.Message}");
                }
            }

            Console.WriteLine("\nAll fetch operations completed.");
            Console.WriteLine("\nAggregated Results:");
            foreach (var result in results)
            {
                Console.WriteLine($"- {result}");
            }
        }

        static async Task<string> FetchDataFromSourceAsync(string sourceName, int delay)
        {
            await Task.Delay(delay);
            return $"{sourceName}: Data fetched after {delay}ms";
        }
        static async Task<string> FetchDataWithErrorAsync(string sourceName, int delay)
        {
            await Task.Delay(delay);
            throw new Exception($"{sourceName}: Failed to fetch data.");
        }
    }
}
