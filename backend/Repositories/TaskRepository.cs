using backend.Models;

namespace backend.Repositories
{
    public class TaskRepository
    {
        private static List<TaskItem> tasks = new()
        {
            new TaskItem { Id = 1, Title = "Task 1" },
            new TaskItem { Id = 2, Title = "Task 2" },
            new TaskItem { Id = 3, Title = "Task 3" }
        };

        public List<TaskItem> GetAll()
        {
            return tasks;
        }
    }
}