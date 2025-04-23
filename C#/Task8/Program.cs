using System;
using System.Collections.Generic;
using System.Linq;

namespace Task8
{
    // Creating new Interface
    public interface iRepository<T> where T : class
    {
        void Add(T item);
        void Delete(T item);
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Update(T item);
    }
    // Creating a reference class
    public class Students
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
    }

    // Creating a connection class
    public class StudentRepository : iRepository<Students>
    {
        private List<Students> _students;

        public StudentRepository(List<Students> students)
        {
            _students = students;
        }

        public void Add(Students item)
        {
            _students.Add(item);
        }

        public void Delete(Students item)
        {
            _students.Remove(item);
        }

        public IEnumerable<Students> GetAll()
        {
            return _students;
        }

        public Students GetById(int id)
        {
            return _students.FirstOrDefault(s => s.Id == id);
        }

        public void Update(Students item)
        {
            var existing = GetById(item.Id);
            if (existing != null)
            {
                existing.Name = item.Name;
                existing.Age = item.Age;
                existing.Address = item.Address;
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            List<Students> students = new List<Students>();
            iRepository<Students> studentRepository = new StudentRepository(students);

            Console.WriteLine("Simple Console Application");

            int choice = 0;

            while (choice != 6)
            {
                Console.WriteLine("\nChoose an operation:");
                Console.WriteLine("1. Add Student");
                Console.WriteLine("2. Delete Student");
                Console.WriteLine("3. Get All Students");
                Console.WriteLine("4. Get Student By Id");
                Console.WriteLine("5. Update Student");
                Console.WriteLine("6. Exit");
                Console.Write("Enter your choice: ");
                choice = Convert.ToInt32(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        Console.Write("Enter Id: ");
                        int id = Convert.ToInt32(Console.ReadLine());
                        Console.Write("Enter Name: ");
                        string name = Console.ReadLine();
                        Console.Write("Enter Age: ");
                        int age = Convert.ToInt32(Console.ReadLine());
                        Console.Write("Enter Address: ");
                        string address = Console.ReadLine();

                        Students newStudent = new Students { Id = id, Name = name, Age = age, Address = address };
                        studentRepository.Add(newStudent);
                        Console.WriteLine("Student added.");
                        break;

                    case 2:
                        Console.Write("Enter Id to delete: ");
                        int deleteId = Convert.ToInt32(Console.ReadLine());
                        Students toDelete = studentRepository.GetById(deleteId);
                        if (toDelete != null)
                        {
                            studentRepository.Delete(toDelete);
                            Console.WriteLine("Student deleted.");
                        }
                        else
                        {
                            Console.WriteLine("Student not found.");
                        }
                        break;

                    case 3:
                        Console.WriteLine("All Students:");
                        foreach (var student in studentRepository.GetAll())
                        {
                            Console.WriteLine($"Id: {student.Id}, Name: {student.Name}, Age: {student.Age}, Address: {student.Address}");
                        }
                        break;

                    case 4:
                        Console.Write("Enter Id to search: ");
                        int searchId = Convert.ToInt32(Console.ReadLine());
                        Students found = studentRepository.GetById(searchId);
                        if (found != null)
                        {
                            Console.WriteLine($"Id: {found.Id}, Name: {found.Name}, Age: {found.Age}, Address: {found.Address}");
                        }
                        else
                        {
                            Console.WriteLine("Student not found.");
                        }
                        break;

                    case 5:
                        Console.Write("Enter Id to update: ");
                        int updateId = Convert.ToInt32(Console.ReadLine());
                        Students toUpdate = studentRepository.GetById(updateId);
                        if (toUpdate != null)
                        {
                            Console.Write("Enter New Name: ");
                            toUpdate.Name = Console.ReadLine();
                            Console.Write("Enter New Age: ");
                            toUpdate.Age = Convert.ToInt32(Console.ReadLine());
                            Console.Write("Enter New Address: ");
                            toUpdate.Address = Console.ReadLine();

                            studentRepository.Update(toUpdate);
                            Console.WriteLine("Student updated.");
                        }
                        else
                        {
                            Console.WriteLine("Student not found.");
                        }
                        break;

                    case 6:
                        Console.WriteLine("Exiting...");
                        break;

                    default:
                        Console.WriteLine("Invalid choice.");
                        break;
                }
            }
        }
    }
}
