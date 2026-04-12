using Xunit;
using backend.Models;

namespace backend.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Task_ShouldHaveTitle()
        {
            // Arrange
            var task = new TaskItem
            {
                Title = "Test task"
            };

            // Assert
            Assert.Equal("Test task", task.Title);
        }
    }
}