import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Błąd pobierania:", err);
    }
  };

 
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await axios.post("http://localhost:8081/api/tasks", {
        title
      });

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

      {/* 🔹 Formularz */}
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

      {/* 🔹 Lista */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}