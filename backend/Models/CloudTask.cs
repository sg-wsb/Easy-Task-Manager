namespace backend.Models
{
    public class CloudTask
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public bool IsCompleted { get; set; } = false;
    }
}