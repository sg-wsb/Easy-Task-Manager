import { useState } from 'react'

function App() {

  const [tasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" }
  ])

  return (
    <div style={{padding: "40px"}}>
      <h1>Easy Task Manager</h1>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

    </div>
  )
}

export default App