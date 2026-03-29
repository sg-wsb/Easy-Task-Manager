import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const API_URL = "https://task-api-seba-123-f6dng4b6fzhafga0.polandcentral-01.azurewebsites.net/api/tasks";

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Błąd pobierania:", err);
    }
  };

  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await axios.post(API_URL, { title });
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error("Błąd dodawania:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Tasks Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nowe zadanie..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}