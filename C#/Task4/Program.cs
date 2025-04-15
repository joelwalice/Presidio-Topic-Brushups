using System;

namespace Task4{
    class Student{
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }

        public Student(string name, int age, string address){
            Name = name;
            Age = age;
            Address = address;
        }
    }
    class Program{
        static void Main(string[] args){
            Console.WriteLine("ListQ Application");
            List<Student> students = new List<Student>();
            Console.WriteLine("Enter the number of students:");
            int n = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < n; i++){
                Console.WriteLine($"Enter details for student {i + 1}:");
                Console.Write("Name: ");
                string name = Console.ReadLine();
                Console.Write("Age: ");
                int age = Convert.ToInt32(Console.ReadLine());
                Console.Write("Address: ");
                string address = Console.ReadLine();
                students.Add(new Student(name, age, address));
            }
            Console.WriteLine("Student List:");
            foreach (var student in students){
                Console.WriteLine($"Name: {student.Name}, Age: {student.Age}, Address: {student.Address}");
            }
            Console.WriteLine("Enter the name of the student to search:");
            string searchName = Console.ReadLine();
            Student foundStudent = students.Find(s => s.Name.Equals(searchName, StringComparison.OrdinalIgnoreCase));
            if (foundStudent != null){
                Console.WriteLine($"Student found: Name: {foundStudent.Name}, Age: {foundStudent.Age}, Address: {foundStudent.Address}");
            } else {
                Console.WriteLine("Student not found.");
            }
            // Filter students by age
            Console.WriteLine("Enter the age to filter students who are greater than:");
            int filterAge = Convert.ToInt32(Console.ReadLine());
            List<Student> filteredStudents = students.FindAll(s => s.Age >= filterAge);
            Console.WriteLine($"Students older than {filterAge}:");
            foreach (var student in filteredStudents){
                Console.WriteLine($"Name: {student.Name}, Age: {student.Age}, Address: {student.Address}");
            }
            // Sort it in ascending/ descending order
            Console.WriteLine("Sort students by age in ascending or descending order? (asc/desc):");
            string sortOrder = Console.ReadLine();
            if (sortOrder == "asc"){
                students.Sort((s1, s2) => s1.Age.CompareTo(s2.Age));
            } else if (sortOrder == "desc"){
                students.Sort((s1, s2) => s2.Age.CompareTo(s1.Age));
            } else {
                Console.WriteLine("Invalid sort order.");
            }
            Console.WriteLine("Sorted Student List:");
            foreach (var student in students){
                Console.WriteLine($"Name: {student.Name}, Age: {student.Age}, Address: {student.Address}");
            }
        }
    }
}