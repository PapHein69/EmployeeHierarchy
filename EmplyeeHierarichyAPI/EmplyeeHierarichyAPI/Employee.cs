namespace EmplyeeHierarichyAPI
{
    public class Employee
    {
        public int id { get; set; }
        public string employeeNumber { get; set; } = String.Empty;
        public int salary { get; set; }
        public int permissionRank { get; set; }
        public string manager { get; set; } = String.Empty;
        public string name { get; set; } = String.Empty;
        public string surname { get; set; } = String.Empty;
        public DateTime birthDate { get; set; }
        public string position { get; set; } = String.Empty ;

        public byte[]? image { get; set; } 

    }
}
