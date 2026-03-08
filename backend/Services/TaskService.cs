using backend.Models;
using backend.Repositories;

namespace backend.Services
{
    public class TaskService
    {
        private readonly TaskRepository _repository;

        public TaskService()
        {
            _repository = new TaskRepository();
        }

        public List<TaskItem> GetTasks()
        {
            return _repository.GetAll();
        }
    }
}