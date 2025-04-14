using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> items = new List<string>();
        string input = "";

        Console.WriteLine("=== String List Manager ===");

        while (true)
        {
            Console.WriteLine("\nChoose an option:");
            Console.WriteLine("1. Add item");
            Console.WriteLine("2. Remove item");
            Console.WriteLine("3. Display items");
            Console.WriteLine("4. Exit");

            Console.Write("Enter choice: ");
            input = Console.ReadLine().Trim();

            switch (input)
            {
                case "1":
                    Console.Write("Enter item to add: ");
                    string addItem = Console.ReadLine().Trim();
                    if (!string.IsNullOrEmpty(addItem))
                    {
                        items.Add(addItem);
                        Console.WriteLine($"'{addItem}' added.");
                    }
                    else
                    {
                        Console.WriteLine("Item cannot be empty.");
                    }
                    break;

                case "2":
                    Console.Write("Enter item to remove: ");
                    string removeItem = Console.ReadLine().Trim();
                    if (items.Remove(removeItem))
                    {
                        Console.WriteLine($"'{removeItem}' removed.");
                    }
                    else
                    {
                        Console.WriteLine($"Item '{removeItem}' not found.");
                    }
                    break;

                case "3":
                    Console.WriteLine("\nItems in the list:");
                    if (items.Count == 0)
                    {
                        Console.WriteLine("The list is empty.");
                    }
                    else
                    {
                        for (int i = 0; i < items.Count; i++)
                        {
                            Console.WriteLine($"{i + 1}. {items[i].ToUpper()}");
                        }
                    }
                    break;

                case "4":
                    Console.WriteLine("Exiting program. Goodbye!");
                    return;

                default:
                    Console.WriteLine("Invalid choice. Please enter 1-4.");
                    break;
            }
        }
    }
}
