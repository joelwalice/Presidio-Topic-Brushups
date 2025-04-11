namespace ConsoleApp1
{
    class program
    {
        static void Main(string[] args)
        {
            // Read the Input from the User

            Console.WriteLine("Enter the Number : ");
            int Name = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("The Entered Number is " + Name);

            // Check whether it is Positive

            Console.WriteLine("Enter the Number : ");
            int Num = Convert.ToInt32(Console.ReadLine());
            if (Num > 0)
            {
                Console.WriteLine("The Entered Number " + Num + " is Positive");
            }
            else
            {
                Console.WriteLine("The Entered Number " + Num + " is negative");
            }

            // Factorial

            Console.WriteLine("Enter the Number to find the Factorial : ");
            int n = Convert.ToInt32(Console.ReadLine());
            int fact = 1;
            for (int i = 1; i <= n; i++)
            {
                fact *= i;
            }
            Console.WriteLine("Factorial is " + fact);
        }
    }
}