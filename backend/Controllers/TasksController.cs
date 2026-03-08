using Microsoft.AspNetCore.Mvc;
using backend.Services;
using backend.DTOs;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly TaskService _service;

        public TasksController()
        {
            _service = new TaskService();
        }

        [HttpGet]
        public ActionResult<List<TaskDto>> Get()
        {
            var tasks = _service.GetTasks();

            var result = tasks.Select(t => new TaskDto
            {
                Id = t.Id,
                Title = t.Title
            }).ToList();

            return Ok(result);
        }

        [HttpGet("{id}")]
        public ActionResult<TaskDto> GetById(int id)
        {
            var task = _service.GetTasks().FirstOrDefault(t => t.Id == id);

            if (task == null)
                return NotFound();

            return Ok(new TaskDto
            {
                Id = task.Id,
                Title = task.Title
            });
        }

        [HttpPost]
        public IActionResult Create([FromBody] TaskDto dto)
        {
            var tasks = _service.GetTasks();

            var newTask = new TaskItem
            {
                Id = tasks.Count + 1,
                Title = dto.Title
            };

            tasks.Add(newTask);

            return Created($"/api/tasks/{newTask.Id}", newTask);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] TaskDto dto)
        {
            var tasks = _service.GetTasks();
            var task = tasks.FirstOrDefault(t => t.Id == id);

            if (task == null)
                return NotFound();

            task.Title = dto.Title;

            return Ok(task);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var tasks = _service.GetTasks();
            var task = tasks.FirstOrDefault(t => t.Id == id);

            if (task == null)
                return NotFound();

            tasks.Remove(task);

            return NoContent();
        }
    }
}