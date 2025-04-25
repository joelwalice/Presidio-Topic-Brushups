using System;
using System.Linq;
using System.Reflection;

namespace Task9
{
    // 1. Define the custom attribute
    [AttributeUsage(AttributeTargets.Method)]
    public class RunnableAttribute : Attribute
    {
    }

    // 2. Sample class with [Runnable] methods
    public class MathOperations
    {
        [Runnable]
        public string Add() => $"Add: {2 + 3}";

        public void Subtract() => Console.WriteLine("Not runnable");
    }

    public class StringOperations
    {
        [Runnable]
        public string Greet() => "Hello from StringOperations!";
    }

    public class DateTimeOperations
    {
        [Runnable]
        public string CurrentTime() => $"Current Time: {DateTime.Now}";
    }

    // 3. Main program that discovers and executes [Runnable] methods
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("== Runnable Methods Output ==\n");

            var runnableMethods = Assembly.GetExecutingAssembly()
                .GetTypes()
                .SelectMany(type => type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
                .Where(method => method.GetCustomAttribute<RunnableAttribute>() != null);

            foreach (var method in runnableMethods)
            {
                try
                {
                    object classInstance = Activator.CreateInstance(method.DeclaringType);
                    object result = method.Invoke(classInstance, null);

                    Console.WriteLine($"{method.DeclaringType.Name}.{method.Name}() => {result}");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error executing {method.Name}: {ex.Message}");
                }
            }

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}
