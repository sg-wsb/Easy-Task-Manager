import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8081/api/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));

  }, []);

  return (
    <div style={{padding: "40px"}}>
      <h1>Tasks</h1>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

    </div>
  );
}