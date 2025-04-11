using System;

namespace Task2{
    class Person{
        string Name;
        int Age;
        string Course;
        public void Introduce(){
            Console.WriteLine("Helon, I am " + Name + " and I am " + Age + " Years Old.");
        }

        public void GetData(){
            Console.WriteLine("Enter the Name : ");
            Name = Console.ReadLine();
            Console.WriteLine("Enter the Age : ");
            Age = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the Course : ");
            Course = Console.ReadLine();
        }
    }
    class System{
        static void Main(){
            // Creating the Person Instance

            Person p1 = new Person();
            p1.GetData();
            p1.Introduce();

            // Creating the second Instance

            Person p2 = new Person();
            p2.GetData();
            p2.Introduce();
        }
    }
}